#!./venv/bin/python

from flask import render_template, url_for, redirect, flash, send_from_directory, jsonify, request
# from flask.ext.cache import Cache
from pymongo import MongoClient
from pqr import pqr
from settings import APP_JSON
from secret_key import secret_key
import os
import json

# cache = Cache(pqr,config={'CACHE_TYPE': 'simple'})
MOLECULE_OF_THE_WEEK = 'GZCGUPFRVQAUEE-SLPGGIOYSA-N'

###############################################################################################################
@pqr.route('/')
@pqr.route('/home')
@pqr.route('/home/')
def index():
    page = {'id': "page-home"}
    return render_template("home.html", page=page)


###############################################################################################################
@pqr.route('/mol/<key>')
@pqr.route('/mol/<key>/')
@pqr.route('/mol/')  # if no key lets default to the molecule of the day
@pqr.route('/mol')  #if no key lets default to the molecule of the day
# @cache.cached(timeout=5)
def molecule(key="-1"):
    if key == "-1":
        key = MOLECULE_OF_THE_WEEK

    key_first_two = key[:2]

    page = {'id': "page-molecule", 'moleculeKey': key, 'key_first_two': key_first_two}

    try:
        with open(os.path.join(APP_JSON, key_first_two + '/' + key + '.json')) as j:
            json_dict = json.load(j)
    except IOError:
        flash("You entered a molecule that didn't exist, so you've been redirected to the molecule of the week!")
        return redirect(url_for('molecule', key=MOLECULE_OF_THE_WEEK))

    # return the view
    return render_template("molecule.html", page=page, jsonDict=json_dict)


###############################################################################################################
@pqr.route('/news')
@pqr.route('/news/')
def news():
    page = {'id': "page-news"}

    return render_template("news.html", page=page)

###############################################################################################################
@pqr.route('/browse')
@pqr.route('/browse/')
@pqr.route('/browse/<query>')
@pqr.route('/browse/<query>/')
def browse(query="-1"):

    if query == "-1":
        flash("You didn't search for anything!")
        return redirect(url_for('index'))

    client = MongoClient()
    db = client.test
    temp = db.molecules.ensure_index([
        ("name", "text"),
        ("inchikey", "text"),
        ("formula", "text")
    ])

    tempArr = []

    print query
    cursor = db.molecules.find({ "$text": {"$search": str(query) }} )
    for i in cursor:
        i["mol2url"] = i["inchikey"][:2] + "/" + i["inchikey"]
        tempArr.append(i)

    print tempArr

    page = {'id': "page-browse"}

    return render_template("browse.html", page=page, results=tempArr)

@pqr.route('/data')
@pqr.route('/data/<key>')
def data(key):
    with open(os.path.join(APP_JSON, key[:2] + '/' + key + '.json')) as j:
        json_dict = json.load(j)
    return jsonify(json_dict)

###############################################################################################################
@pqr.route('/contact')
@pqr.route('/contact/')
def contact():
    page = {'id': "page-contact"}

    return render_template("contact.html", page=page)


###############################################################################################################
# Properly handle the favicon
@pqr.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(pqr.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


###############################################################################################################

###############################################################################################################
@pqr.errorhandler(404)
def page_not_found(e):
    molecule(key=MOLECULE_OF_THE_WEEK)

###############################################################################################################


### CHANGE THIS ON PRODUCTION SERVER!!!!!!!!
pqr.secret_key = secret_key
###

if __name__ == '__main__':
    pqr.run()
