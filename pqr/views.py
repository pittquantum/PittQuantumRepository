#!./venv/bin/python

# Flask specific imports
from flask import render_template, url_for, redirect, flash, send_from_directory, jsonify, request, Markup, Response, make_response
from flask.ext.cache import Cache

#HTML Minifier
from htmlmin.minify import html_minify

# mandrill emailing
from flask.ext.mandrill import Mandrill

# MongoDB specific imports
from pymongo import MongoClient

# PQR specific imports
from pqr import pqr, secret_config

from settings import APP_JSON, APP_MOL2, APP_ARTICLES

# Python library imports
import os
import json
import markdown
import datetime
from difflib import SequenceMatcher as SM

# Regular expressions for chemical formula parsing
import re

cache = Cache(pqr, config={'CACHE_TYPE': 'simple'})
cache.init_app(pqr)

redirect_table = {}
amount_mol = None
MOLECULE_OF_THE_WEEK = 'GZCGUPFRVQAUEE-SLPGGIOYSA-N'
WEEKLY_MOL_NAME = None
pqr.debug = True

last_updated_wm = datetime.datetime.strptime('Aug 7 1996', '%b %d %Y').date()

##########################################################################


@pqr.before_request
def beforeRequest():
    if 'https://' not in request.url:
        return redirect(request.url.replace('http://', 'https://'))

@pqr.route('/')
@pqr.route('/home', strict_slashes=False)
@cache.cached(timeout=86400)
def index():
    global last_updated_wm
    global MOLECULE_OF_THE_WEEK
    global WEEKLY_MOL_NAME

    page = {'id': "page-home"}
    articles = [os.path.splitext(article)[0]
                       for article in next(os.walk(APP_ARTICLES))[2]]
    new_articles = sorted(get_new_articles(articles, 14), reverse=True)
    articles = sorted(list(set(articles) - set(new_articles)), reverse=True)

    today = datetime.date.today()
    idx = (today.weekday() + 1) % 7
    sun = today - datetime.timedelta(7+idx)

    if last_updated_wm < sun:
        weekly_mol = get_weekly_molecule_list()[-1].split(',')
        MOLECULE_OF_THE_WEEK = weekly_mol[0]
        WEEKLY_MOL_NAME = weekly_mol[1]
        last_updated_wm = today

    week_mol = (MOLECULE_OF_THE_WEEK[:2] + "/" + MOLECULE_OF_THE_WEEK)

    rendered_html = render_template("home.html", page=page, amount_mol=amount_mol, articles=articles, new_articles=new_articles, week_mol=week_mol, week_mol_name=WEEKLY_MOL_NAME)
    min_html = html_minify(rendered_html.encode('utf8'))
    return min_html


##########################################################################
@pqr.route('/mol/<key>', strict_slashes=False)
@pqr.route('/mol', strict_slashes=False)  # if no key lets default to the molecule of the day
@cache.cached(timeout=43200)
def molecule(key="-1"):
    if key == "-1":
        key = MOLECULE_OF_THE_WEEK

    # Checks to see if the key passed in exists in the redirect table
    # If it does, it redirects to this same route, except with the proper key
    # It also flashes a message that shows the redirection
    if key in redirect_table.keys():
        flash("Redirected! " + str(key) +
              " is actually the same as " + str(redirect_table[key]), 'redirect')
        return redirect(url_for('molecule', key=redirect_table[key]))

    # This gets the first two characters of the key, allowing for directory
    # traversal
    key_first_two = key[:2]

    page = {'id': "page-molecule", 'moleculeKey': key,
            'key_first_two': key_first_two}

    try:
        # Loads the JSON file relevant to the InChI key requested
        with open(os.path.join(APP_JSON, key_first_two + '/' + key + '.json')) as j:
            json_dict = json.load(j)
    except IOError:
        # If we don't have the key, flash
        flash(
            "You entered a molecule that didn't exist, so you've been redirected to the molecule of the week!", 'redirect')
        return redirect(url_for('molecule', key=MOLECULE_OF_THE_WEEK))

    meta_description = "You are viewing an interactive 3D depiction of the molecule " + json_dict["name"] + " (" + json_dict["formula"] + ") from the PQR."

    # return the view
    return render_template("molecule.html", page=page, jsonDict=json_dict, metaDescription=meta_description)
    #min_html = html_minify(rendered_html.encode('utf8'))
    #return min_html

##########################################################################
@pqr.route('/news', strict_slashes=False)
@pqr.route('/news/<title>', strict_slashes=False)
@cache.cached(timeout=86400)
def news(title="-1"):
    page = {'id': "page-news"}

    try:
        # Loads the JSON file relevant to the InChI key requested
        with open(os.path.join(APP_ARTICLES,  title + '.md'), 'r') as f:
            opened = f.read().strip()
            html = markdown.markdown(opened)
            f.close()
    except IOError:
        # If we don't have the key, flash
        flash(
            "You entered a article that doesn't exist! You have been redirected to the home page.", 'redirect')
        return redirect(url_for('index'))

    output = Markup(html)

    rendered_html = render_template("news.html", output=output, page=page)
    min_html = html_minify(rendered_html.encode('utf8'))
    return min_html

##########################################################################


@pqr.route('/browse', strict_slashes=False)
@pqr.route('/browse/<page_num>', strict_slashes=False)
#@cache.memoize(timeout=86400)
def browse(page_num="-1"):

    # Get the page number that is passed in
    # If negative, make it positive
    # If no page number is passed in, assume it is 1
    try:
        page_num = abs(int(page_num))
    except ValueError:
        page_num = 1

    # Set the query string
    query = request.args.get('query', '').lower()

    # this is the get variable type accepted values name,inchi, keyword,
    # formula
    searchType = request.args.get('type', '')

    # If there was no query searched for, flash and go to home
    if query == "-1":
        flash(
            "You didn't search for anything! You have been redirected to the home page.", 'redirect')
        return redirect(url_for('index'))

    # Initialize the Mongo client
    client = MongoClient()
    db = client.test

    results = []

    # Do a text search for the passed in query
    if searchType == 'formula':
        query = query.upper()
    elif searchType == 'tag':
        searchType = 'tags'
    elif searchType == 'synonym':
        searchType = 'synonyms'
    elif searchType == 'inchi':
        searchType = 'inchikey'
        query = query.upper()
        if query in redirect_table.keys():
            query = redirect_table[query]
    cursor = db.molecules.find({str(searchType): str(query)}).limit(500)

    # Append all dicts in the cursor to a results array
    for i in cursor:
        i["mol2url"] = i["inchikey"][:2] + "/" + i["inchikey"]
        i["json_data"] = get_json_data_file(i["inchikey"][:2], i["inchikey"])
        results.append(i)

    if len(results) == 0:
        cursor = db.molecules.find({"$text": {"$search": str(query)}})
        for i in cursor:
            i["mol2url"] = i["inchikey"][:2] + "/" + i["inchikey"]
            i["json_data"] = get_json_data_file(i["inchikey"][:2], i["inchikey"])
            results.append(i)

    # Find lightest molecule to normalize mass-based search
    temp = sorted(
        map(lambda x: x["formula"], results), key=lambda x: formula2mass(x))
    lightest = formula2mass(temp[0]) if temp else 1e12

    results = sorted(results, key=lambda x: similar(
        x[searchType], x['formula'], lightest, str(query)), reverse=True)

    # If there is only one result, show that molecule page directly
    total_results = len(results)
    if total_results == 1:
        return redirect(url_for('molecule', key=results[0]["inchikey"]))

    # Split the reults array into chunks of 50 each for search pagination - 50 for AJAX (May want to change)
    if request.args.get('ajax'):
        tempArr = list(chunks(results, 100)) 
    else:
        tempArr = list(chunks(results, 100))

    # The number of pages is just the total number of chunks
    num_pages = len(tempArr)

    # If the number of pages is more than 0, return the N-1th page to the template
    # If the number of pages is 0, that means there are no results, so results = None
    # If an index that doesn't exist is accessed (user manually making a URL query),
    # then just go to the first page of results
    try:
        if num_pages > 0:
            results = tempArr[page_num - 1]
        else:
            results = None
    except IndexError:
        results = tempArr[0]

    page = {'id': "page-browse"}

    # This is to tell the front-end which page the user is on
    # If no page_num was passed in and there are multiple pages, first page is active
    # Else if no page_num was passed in and there is one page, make active -1 to hide pager
    # If the user passes is a page_num greater than the number of pages, then first page
    # Else the active page is just whatever page the user is on
    if page_num == -1 and num_pages > 1:
        active = 1
    elif page_num == -1 and num_pages == 1:
        active = -1
    else:
        if page_num > num_pages:
            active = 1
        else:
            active = page_num
            
    if request.args.get('ajax'):
        return render_template("browse_ajax.html", results=results)
    else:
        rendered_html = render_template("browse.html", page=page, results=results, query=query, searchType=searchType, typenum_pages=num_pages, active=active, total_results=total_results)
        min_html = html_minify(rendered_html.encode('utf8'))
        return min_html

#################################################

@pqr.route('/suggestions', strict_slashes=False)
def searchSuggestions():
    if request.args.get('partial'): 
        partial = request.args.get('partial').strip()
        return_items = get_suggestions(partial)
        return Response(json.dumps(return_items), mimetype='application/json')
    else:
        return Response(json.dumps([]), mimetype='application/json')

#################################################

@pqr.route('/api/weekly', strict_slashes=False)
@cache.cached(timeout=86400)
def weekly_molAPI():
    return_list = get_weekly_molecule_list()
    return Response("\n".join(return_list), mimetype='text/plain')


@pqr.route('/api/browse/<query>/<searchType>', strict_slashes=False)
def browseAPI(query, searchType):

    # Set the query string
    query = query.lower()

    # Initialize the Mongo client
    client = MongoClient()
    db = client.test

    results = []

    # Do a text search for the passed in query
    if searchType == 'formula':
        query = query.upper()
    elif searchType == 'tag':
        searchType = 'tags'
    elif searchType == 'synonym':
        searchType = 'synonym'
    elif searchType == 'inchi':
        searchType = 'inchikey'
        query = query.upper()
    else:
        searchType = 'name'

    cursor = db.molecules.find({str(searchType): str(query)})

    # Append all dicts in the cursor to a results array
    for i in cursor:
        i["mol2url"] = i["inchikey"][:2] + "/" + i["inchikey"]
        results.append(i)

    if len(results) == 0:
        cursor = db.molecules.find({"$text": {"$search": str(query)}})
        for i in cursor:
            i["mol2url"] = i["inchikey"][:2] + "/" + i["inchikey"]
            results.append(i)

    # Find lightest molecule to normalize mass-based search
    # temp = sorted(map(lambda x: x["formula"], results), key=lambda x: formula2mass(x))
    # lightest = formula2mass(temp[0]) if temp else 1e12

    # results = sorted(results, key=lambda x: similar(x[searchType],
    # x['formula'], lightest, str(query)), reverse=True)

    for x in results:
        x["last_updated"] = x["last_updated"].isoformat()
        x.pop("_id", None)
        x.pop("properties_id", None)

    return Response(json.dumps(results), mimetype='application/json')


@pqr.route('/api/status', strict_slashes=False)
def getStatus():
    import os.path
    import time
    stuff_to_print = {}

    git_path = os.path.join(
        os.path.dirname(os.path.dirname(__file__)), ".git/")
    data_path = os.path.join(os.path.dirname(__file__), "static/data/")
    stuff_to_print['last_server_update'] = time.ctime(
        os.path.getmtime(git_path))
    stuff_to_print['last_data_update'] = time.ctime(
        os.path.getmtime(data_path))
    stuff_to_print['amount_of_molecules'] = amount_mol

    return jsonify(stuff_to_print)

@pqr.route('/api/json/<key>', strict_slashes=False)
@cache.cached(timeout=86400)
def jsonAPI(key):

    # Open the relevant JSON file
    with open(os.path.join(APP_JSON, key[:2] + '/' + key + '.json')) as j:
        json_dict = json.load(j)

    # Return a JSON request with proper MIME type
    return jsonify(json_dict)


@pqr.route('/api/mol/<key>', strict_slashes=False)
@cache.cached(timeout=86400)
def molAPI(key):

    mol2 = []
    # Open the relevant mol2 file
    f = open(os.path.join(APP_MOL2, key[:2] + '/' + key + '.mol2'))

    # Return a MOL2 request with the proper MIME type
    response =  Response(f.read().strip(), mimetype='chemical/x-mol2')
    response.headers['Content-Disposition'] = 'attachment; filename=%s' % (key + '.mol2')
    return response

# Return a webpage with a list of all the InChIKeys


@pqr.route('/api/inchikeys', strict_slashes=False)
def inchiAPI():

    root = APP_JSON
    file_list = []

    for folder, subs, files in os.walk(root):
        for fn in files:
            file_list.append(fn.replace('.json', ''))

    return Response("\n".join(file_list), mimetype='text/plain')
##########################################################################


@pqr.route('/contact', methods=['POST', 'GET'], strict_slashes=False)
@cache.cached(timeout=259200)
def contact():
    page = {'id': "page-contact"}

    if request.method == 'GET':
            rendered_html = render_template("contact.html", page=page)
            min_html = html_minify(rendered_html.encode('utf8'))
            return min_html
    else:
        if(validate_contact_us(request.form)):
            send_email(request.form)
            rendered_html = render_template("contact.html", page=page)
            min_html = html_minify(rendered_html.encode('utf8'))
            return min_html

##########################################################################
@pqr.route('/sitemap/<index>', methods=['GET'], strict_slashes=False)
def sitemap(index):
    pages = []
    if index == "0":
        for rule in pqr.url_map.iter_rules():
            if "GET" in rule.methods and len(rule.arguments) == 0:
                pages.append([rule.rule])
        return render_template('sitemap.html', pages=pages, inchi=False)
    else:
        list_of_keys = getINCHIkeys(index)
        if(list_of_keys):
            return render_template('sitemap.html', pages=list_of_keys, inchi=True)
        else:
            return ""

##########################################################################
@pqr.route('/motw', strict_slashes=False)
@pqr.route('/molecules-of-the-week', strict_slashes=False)
def molecule_of_the_week():
    page = {'id': "page-motw"}
    week_molecules = []
    for week_molecule in get_weekly_molecule_list():
        week_molecules.append(week_molecule.split(','))

    print week_molecules
    rendered_html = render_template('molecule-of-the-week.html', page=page, week_molecules=week_molecules)
    min_html = html_minify(rendered_html.encode('utf8'))
    return min_html

##########################################################################

##########################################################################
@pqr.route('/sitemap.xml', methods=['GET'], strict_slashes=False)
def sitemapindex():
    directories = getINCHIfolders()
    return render_template('sitemapIndex.html', moldirs=directories)
##########################################################################

# Properly handle the favicon
@pqr.route('/favicon.ico', strict_slashes=False)
def favicon():
    return send_from_directory(os.path.join(pqr.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

# SEO
@pqr.route('/BingSiteAuth.xml', strict_slashes=False)
def BingSiteAuth():
    return send_from_directory(os.path.join(pqr.root_path, 'static'),
                               'BingSiteAuth.xml', mimetype='text/xml')

@pqr.route('/robots.txt', strict_slashes=False)
def RobotsTxt():
    return send_from_directory(os.path.join(pqr.root_path, 'static'),
                               'robots.txt', mimetype='text/plain')


##########################################################################


@pqr.route('/3spooky5me')
def clear_cache():
    if(not pqr.debug):
        return "You're not supposed to be here o_0"
    global cache
    cache.clear()
    cache = Cache(config={'CACHE_TYPE': 'null'})
    cache.init_app(pqr)
    print cache.config
    print pqr.debug
    flash('Cache cleared')
    return redirect(url_for('molecule', key=MOLECULE_OF_THE_WEEK))

##########################################################################


@pqr.errorhandler(404)
def page_not_found(e):
    #flash("Page not found", 404)
    return redirect(url_for('index'))


@pqr.errorhandler(500)
def page_not_found(e):
    flash("Page not found", 500)
    return redirect(url_for('index'))
##########################################################################


# Helper method to make chunks. Thanks StackOverflow
def chunks(l, n):
    """ Yield successive n-sized chunks from l.
    """
    for i in xrange(0, len(l), n):
        yield l[i:i + n]

# Validate the contact us form


def validate_contact_us(form):
    if(form['name'] and form['email'] and form['verify_email'] and form['subject'] and form['message']):
        if(form['email'] != form['verify_email']):
            flash("Emails don't match!", 'error')
            return False
        else:
            return True
    else:
        flash("Please make sure everything has been filled out!", "error")
        return False

# Send an email using mandrill


def send_email(form):
    mandrill = Mandrill(pqr)
    mandrill.send_email(
        from_email='webmaster@pqr.pitt.edu',
        subject=form['subject'],
        to=[{'email': pqr.config['DEFAULT_EMAIL']},
            {'email': 'jjr76@pitt.edu'}],
        text=form['subject'] + "\n" + "From: " +
        form['email'] + "\n" + form['message'],
        html=render_template("email/contact.html", date=datetime.now().strftime('%Y/%m/%d %H:%M:%S'),
                             name=form['name'], email=form['email'], subject=form['subject'], message=form['message']),
    )
    flash("Message has been sent!", 'sent')


def similar(x, f, m0, query):
    if isinstance(x, list):
        score_list = map(lambda z: similar(z, f, m0, query), x)
        return sum(score_list)
    else:
        # if x in query:
        if query in x:
            # Sort by similarity & mass
            score = 10 + SM(None, x, query).ratio() + m0 / formula2mass(f)
            # score = 10 + SM(None, x, query).ratio() + m0/formula2mass(f) # Sort by similarity
            # score = 10 + m0/formula2mass(f) # Sort by increasing mass
        else:
            # Sort by similarity & mass
            score = SM(None, x, query).ratio() + m0 / formula2mass(f)
            # score = SM(None, x, query).ratio() # Sort by similarity
            # score = m0/formula2mass(f) # Sort by increasing mass
        return score


def formula2mass(f):
    Masses = dict(H=1.01, He=4.00, Li=6.94, Be=9.01, B=10.81, C=12.01,
                  N=14.01, O=16.00, F=19.00, Ne=20.18, Na=22.99, Mg=24.31,
                  Al=26.98, Si=28.09, P=30.97, S=32.07, Cl=35.45, Ar=39.95,
                  K=39.10, Ca=40.08, Sc=44.96, Ti=47.87, V=50.94, Cr=52.00,
                  Mn=54.94, Fe=55.85, Co=58.93, Ni=58.69, Cu=63.55, Zn=65.39,
                  Ga=69.72, Ge=72.61, As=74.92, Se=78.96, Br=79.90, Kr=83.80,
                  Rb=85.47, Sr=87.62, Y=88.91, Zr=91.22, Nb=92.91, Mo=95.94,
                  Tc=98.00, Ru=101.07, Rh=102.91, Pd=106.42, Ag=107.87,
                  Cd=112.41, In=114.82, Sn=118.71, Sb=121.76, Te=127.60,
                  I=126.90, Xe=131.29, Cs=132.91, Ba=137.33, La=138.91,
                  Ce=140.12, Pr=140.91, Nd=144.24, Pm=145.00, Sm=150.36,
                  Eu=151.96, Gd=157.25, Tb=158.93, Dy=162.50, Ho=164.93,
                  Er=167.26, Tm=168.93, Yb=173.04, Lu=174.97, Hf=178.49,
                  Ta=180.95, W=183.84, Re=186.21, Os=190.23, Ir=192.22,
                  Pt=195.08, Au=196.97, Hg=200.59, Tl=204.38, Pb=207.2,
                  Bi=208.98, Po=209.00, At=210.00, Rn=222.00, Fr=223.00,
                  Ra=226.00, Ac=227.00, Th=232.04, Pa=231.04, U=238.03,
                  Np=237.00, Pu=244.00, Am=243.00, Cm=247.00, Bk=247.00,
                  Cf=251.00, Es=252.00, Fm=257.00, Md=258.00, No=259.00,
                  Lr=262.00, Rf=261.00, Db=262.00, Sg=266.00, Bh=264.00,
                  Hs=269.00, Mt=268.00)

    # Makes an array that counts the number of each element
    atom = re.findall('[A-Z][a-z]?|[0-9]+', f)
    consistent = False
    # string = ""
    while not consistent:
        ok = True
        for i in range(0, len(atom), 2):
            try:
                num = int(atom[i + 1])
                # string += "  i = " + str(i) + "   atom[i] = " + atom[i] + "
                # atom[i+1] = " + str(num) + "<br>"
            except (IndexError, ValueError) as e:
                # string += "  exception caught <br>"
                ok = False
                atom.insert(i + 1, 1)
                # string += "    i = " + str(i) + "   atom[i] = " +
                # str(atom[i]) + "   atom[i+1] = " + str(atom[i+1]) + "<br>"
                break
        consistent = ok

    mass = 1e-6
    for i in range(0, len(atom), 2):
        # string += "  m = Masses[" + str(atom[i]) + "] <br>"
        # string += "  n = " + str(atom[i+1]) + " <br>"
        try:
            m = Masses[atom[i]]
            n = float(atom[i + 1])
            mass += n * m
        except (KeyError, ValueError) as e:
            # return string
            continue

    # return string
    return mass

# Get a list of inchi keys for a specific folder (i.e folder AA)


def getINCHIkeys(folder):
    root = APP_JSON
    file_list = []
    path = root + folder.upper()
    if(os.path.isdir(path)):
        for root, dirs, files in os.walk(path):
            for fn in files:
                file_list.append(fn.replace('.json', ''))
        return file_list
    else:
        return False


def getINCHIfolders():
    return os.listdir(APP_JSON)

#Create a new list of 'new' articles based on how many days passed
def get_new_articles(articles, days):
    new_articles = []
    for article in articles:
        date = article[:10]
        try:
            dt = datetime.datetime.strptime(date, "%Y-%m-%d")
            if dt > datetime.datetime.now()-datetime.timedelta(days=days):
                new_articles.append(article)
        except ValueError:
            print "Invalid Date Format"
    return new_articles

#Get a list of the past weekly molecules
def get_weekly_molecule_list():
    # Gets todays date, then rewinds it to the last Sunday
    # (if today is Sunday it sticks with today)
    # Then it compares each line in the file to Sunday's date
    # And when it finds a match, it changes MOLECULE_OF_THE_WEEK in views
    # Also, this thread is run once per day
    return_list = []
    today = datetime.date.toordinal(datetime.datetime.now())
    sunday = today - (today % 7)
    sunday = datetime.date.fromordinal(sunday)
    sunday = datetime.date.isoformat(sunday)
    with open("./pqr/server_start/mol_of_the_week", "r") as molfile:
        for line in molfile:

            # Skips the header
            if line[0] == '#':
                continue

            tokens = line.strip().split(",")
            if len(tokens) < 3:
                continue
            if tokens[0] <= datetime.datetime.isoformat(datetime.datetime.now()).replace('-', ''):
                return_list.append( # inchikey, title, date
                    tokens[1] + "," + tokens[2].title() + "," + tokens[0][0:4] + '-' + tokens[0][4:6] + '-' + tokens[0][6:]
                )

            else: # We are now past the current date, don't show them yet
                return return_list

def get_json_data_file(key_first_two, key):
    try:
        # Loads the JSON file relevant to the InChI key requested
        with open(os.path.join(APP_JSON, key_first_two + '/' + key + '.json')) as j:
            return json.load(j)
    except IOError:
        # If we don't have the key, flash
        return False

# Return suggestions for autocomplete search
# db.molecules.find( { name: { $regex: /^meth/i } } )
def get_suggestions(partial):
    client = MongoClient()
    db = client.test
    cursor = db.molecules.find({'name': { '$regex': str(partial) }}).limit(10)
    results = []
    
    for i in cursor:
        item = {}
        item['name'] =  i["name"] 
        item['inchikey'] =  i["inchikey"]
        item['formula'] =  i["formula"]
        results.append(item)
    return results

if __name__ == '__main__':
    pqr.run()
