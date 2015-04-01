#!./venv/bin/python
from flask import render_template, url_for, redirect, flash
from flask.ext.cache import Cache
from pqr import pqr
from settings import APP_JSON
import os
import json

#cache = Cache(pqr,config={'CACHE_TYPE': 'simple'})
MOLECULE_OF_THE_WEEK = 'GZCGUPFRVQAUEE-SLPGGIOYSA-N'

###############################################################################################################
@pqr.route('/')
@pqr.route('/home')
@pqr.route('/home/')
def index():
	page = {'id': "page-home"}
	return render_template("home.html", page = page)

###############################################################################################################
@pqr.route('/mol/<key>')
@pqr.route('/mol/<key>/')
@pqr.route('/mol/') #if no key lets default to the molecule of the day
@pqr.route('/mol') #if no key lets default to the molecule of the day
#@cache.cached(timeout=5)
def molecule(key = -1):
	if key == -1:
		key = MOLECULE_OF_THE_WEEK

	keyFirstTwo = key[:2]

	page = {'id': "page-molecule", 'moleculeKey': key, 'keyFirstTwo': keyFirstTwo}

	try:
		with open(os.path.join(APP_JSON, keyFirstTwo + '/' + key + '.json')) as j:
			jsonDict = json.load(j)
	except IOError:
		flash("You entered a molecule that didn't exist, so you've been redirected to the molecule of the week!")
		return redirect(url_for('molecule', key=MOLECULE_OF_THE_WEEK))

	# return the view
	return render_template("molecule.html", page = page, jsonDict = jsonDict)

###############################################################################################################
@pqr.route('/news')
@pqr.route('/news/')
def news():
	page = {'id': "page-news"}

	return render_template("news.html", page = page)

###############################################################################################################
@pqr.route('/browse')
@pqr.route('/browse/')
def browse():
	page = {'id': "page-browse"}

	return render_template("browse.html", page = page)

###############################################################################################################
@pqr.route('/contact')
@pqr.route('/contact/')
def contact():
	page = {'id': "page-contact"}

	return render_template("contact.html", page = page)

###############################################################################################################
@pqr.errorhandler(404)
def page_not_found(e):
	molecule(key=MOLECULE_OF_THE_WEEK)

###############################################################################################################

### CHANGE THIS ON PRODUCTION SERVER!!!!!!!!
pqr.secret_key = ';t}UzRZmis-xueR*5Hh:F={7?2^|.mPxW-`@*||L]]y]:h7v[A4TCn_:[j{-:+`9'
###

if __name__ == '__main__':
	pqr.run()
