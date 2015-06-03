#!./venv/bin/python

# Flask specific imports
from flask import render_template, url_for, redirect, flash, send_from_directory, jsonify, request, Markup
from flask.ext.cache import Cache

# mandrill emailing
from flask.ext.mandrill import Mandrill

# MongoDB specific imports
from pymongo import MongoClient

# PQR specific imports
from pqr import pqr, secret_config

from settings import APP_JSON, APP_ARTICLES

# Python library imports
import os
import json
import markdown
from datetime import datetime

cache = Cache(pqr, config={'CACHE_TYPE': 'simple'})

redirect_table = {}
amount_mol = None
MOLECULE_OF_THE_WEEK = 'GZCGUPFRVQAUEE-SLPGGIOYSA-N'

##########################################################################
@pqr.route('/')
@pqr.route('/home')
@pqr.route('/home/')
@cache.cached(timeout=86400)
def index():
    page = {'id': "page-home"}
    articles = [os.path.splitext(article)[0]
                for article in next(os.walk(APP_ARTICLES))[2]]

    return render_template("home.html", page=page, amount_mol=amount_mol, articles=articles)


##########################################################################
@pqr.route('/mol/<key>')
@pqr.route('/mol/<key>/')
@pqr.route('/mol/')  # if no key lets default to the molecule of the day
@pqr.route('/mol')  # if no key lets default to the molecule of the day
@cache.cached(timeout=86400)
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

    # return the view
    return render_template("molecule.html", page=page, jsonDict=json_dict)


##########################################################################
@pqr.route('/news')
@pqr.route('/news/')
@pqr.route('/news/<title>')
@pqr.route('/news/<title>/')
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

    return render_template("news.html", output=output, page=page)

##########################################################################
@pqr.route('/browse')
@pqr.route('/browse/')
@pqr.route('/browse/<query>')
@pqr.route('/browse/<query>/')
@pqr.route('/browse/<query>/<page_num>')
@pqr.route('/browse/<query>/<page_num>/')
def browse(query="-1", page_num="-1"):

    # Get the page number that is passed in
    # If negative, make it positive
    # If no page number is passed in, assume it is 1
    try:
        page_num = abs(int(page_num))
    except ValueError:
        page_num = 1

    # If there was no query searched for, flash and go to home
    if query == "-1":
        flash(
            "You didn't search for anything! You have been redirected to the home page.", 'redirect')
        return redirect(url_for('index'))

    # Initialize the Mongo client
    client = MongoClient()
    db = client.test

    # Make sure the index exists
    # temp = db.molecules.ensure_index([
    #    ("name", "text"),
    #    ("inchikey", "text"),
    #    ("formula", "text"),
    #    ("tags", "text"),
    #    ("synonyms", "text")
    #])

    results = []

    # Do a text search for the passed in query
    cursor = db.molecules.find({"$text": {"$search": str(query)}})

    # Append all dicts in the cursor to a results array
    for i in cursor:
        i["mol2url"] = i["inchikey"][:2] + "/" + i["inchikey"]
        results.append(i)

    # Split the reults array into chunks of 10 each for search pagination
    tempArr = list(chunks(results, 10))

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

    return render_template("browse.html", page=page, results=results, query=query, num_pages=num_pages, active=active)


@pqr.route('/data')
@pqr.route('/data/<key>')
def data(key):

    # Open the relevant JSON file
    with open(os.path.join(APP_JSON, key[:2] + '/' + key + '.json')) as j:
        json_dict = json.load(j)

    # Return a JSON request with proper MIME type
    return jsonify(json_dict)

##########################################################################
@pqr.route('/contact', methods=['POST', 'GET'])
@pqr.route('/contact/', methods=['POST', 'GET'])
@cache.cached(timeout=259200)
def contact():
    page = {'id': "page-contact"}

    if request.method == 'GET':
        return render_template("contact.html", page=page)
    else:
        if(validate_contact_us(request.form)):
            send_email(request.form)
        return render_template("contact.html", page=page)

##########################################################################
# Properly handle the favicon


@pqr.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(pqr.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

##########################################################################

##########################################################################
@pqr.errorhandler(404)
def page_not_found(e):
    flash("Page not found", 404)
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
        to=[{'email': pqr.config['DEFAULT_EMAIL']}, {'email': 'jjr76@pitt.edu'}],
        text=form['subject'] + "\n" + "From: " + form['email'] + "\n" + form['message'],
        html=render_template("email/contact.html", date=datetime.now().strftime('%Y/%m/%d %H:%M:%S'),
                             name=form['name'], email=form['email'], subject=form['subject'], message=form['message']),
    )
    flash("Message has been sent!", 'sent')


if __name__ == '__main__':
    pqr.run()
