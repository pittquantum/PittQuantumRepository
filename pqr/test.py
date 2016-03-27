import cProfile
import re
import os
from pymongo import MongoClient
from htmlmin.minify import html_minify
from settings import APP_JSON, APP_MOL2, APP_ARTICLES
from difflib import SequenceMatcher as SM
import ujson as json
#import json

def chunks(l, n):
    """ Yield successive n-sized chunks from l.
    """
    for i in xrange(0, len(l), n):
        yield l[i:i + n]

def similar(x, f, m0, query):
    #print x
    #if isinstance(x, list):
    #    score_list = map(lambda z: similar(z, f, m0, query), x)
    #    return sum(score_list)
    #else:
    # if x in query:
    if query in x:
        score = 10 + SM(None, x, query).ratio() + m0 / formula2mass(f)
    else:
        score = SM(None, x, query).ratio() + m0 / formula2mass(f)
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

def get_json_data_file(key_first_two, key):
    try:
        # Loads the JSON file relevant to the InChI key requested
        with open(os.path.join(APP_JSON, key_first_two + '/' + key + '.json')) as j:
            return json.load(j)
    except IOError:
        # If we don't have the key, flash
        return False

def browse(query="water", searchType="name", page_num="1"):

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
        return ""

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
            try:
                i["json_data"] = get_json_data_file(i["inchikey"][:2], i["inchikey"])
                results.append(i)
            except:
                if len(list(cursor)) == 0:
                    rendered_html = "<html><body></body></html>" 
                    min_html = html_minify(rendered_html.encode('utf8'))
                    return min_html


    # Find lightest molecule to normalize mass-based search
    temp = sorted(
        map(lambda x: x["formula"], results), key=lambda x: formula2mass(x))
    lightest = formula2mass(temp[0]) if temp else 1e12

    results = sorted(results, key=lambda x: similar(
        x[searchType], x['formula'], lightest, str(query)), reverse=True)

    # If there is only one result, show that molecule page directly
    total_results = len(results)
    if total_results == 1:
        return ""

    # Split the reults array into chunks of 50 each for search pagination - 50 for AJAX (May want to change)
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

    rendered_html = "<html><body></body></html>"
    min_html = html_minify(rendered_html.encode('utf8'))
    return min_html

import cProfile, pstats, StringIO
pr = cProfile.Profile()
pr.enable()
browse("acid", "name", "1")
pr.disable()
s = StringIO.StringIO()
sortby = 'cumulative'
ps = pstats.Stats(pr, stream=s).sort_stats(sortby)
ps.print_stats()
print s.getvalue()
