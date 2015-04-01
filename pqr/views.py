#!./venv/bin/python
from flask import Flask, render_template, url_for, redirect
from pqr import pqr
from settings import APP_JSON
import os
import json
import math

MOLECULE_OF_THE_DAY = 'GZCGUPFRVQAUEE-SLPGGIOYSA-N'

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
def molecule(key = -1):
	if key == -1:
		key = MOLECULE_OF_THE_DAY #Molecule of the day value

	keyFirstTwo = key[:2]

	page = {'id': "page-molecule", 'moleculeKey': key, 'keyFirstTwo': keyFirstTwo}

	try:
		with open(os.path.join(APP_JSON, keyFirstTwo + '/' + key + '.json')) as j:
			jsonDict = json.load(j)
	except IOError:
		return redirect(url_for('molecule', key=MOLECULE_OF_THE_DAY))

	dipole = jsonDict["pm7"]["dipole"]
	dipoleMoment = 0

	for i in dipole:
		dipoleMoment += float(i)**2
	dipoleMoment = math.sqrt(dipoleMoment)
	dipoleMoment = float("{0:.3f}".format(dipoleMoment))
	print dipoleMoment

	# return the view
	return render_template("molecule.html", page = page, jsonDict = jsonDict, dipoleMoment = dipoleMoment)

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
	molecule(key=MOLECULE_OF_THE_DAY)

###############################################################################################################
if __name__ == '__main__':
	pqr.run()
