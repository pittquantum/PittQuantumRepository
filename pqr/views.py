#!./venv/bin/python
from flask import render_template
from pqr import pqr

MOLECULE_OF_THE_DAY = 999

@pqr.route('/')
@pqr.route('/home')
@pqr.route('/home/')
def index():
	page = {'id': "page-home"}
	return render_template("home.html", page = page)

@pqr.route('/mol/<key>')
@pqr.route('/mol/<key>/')
@pqr.route('/mol/') #if no key lets default to the molecule of the day
@pqr.route('/mol') #if no key lets default to the molecule of the day
def molecule(key = -1):
	if key == -1:
		key = MOLECULE_OF_THE_DAY #Molecule of the day value
	keyFirstTwo = key[:2]
	page = {'id': "page-molecule", 'moleculeKey': key, 'keyFirstTwo': keyFirstTwo}
	return render_template("molecule.html", page = page)

@pqr.route('/news')
@pqr.route('/news/')
def news():
	page = {'id': "page-news"}
	return render_template("news.html", page = page)

@pqr.route('/browse')
@pqr.route('/browse/')
def browse():
	page = {'id': "page-browse"}
	return render_template("browse.html", page = page)

@pqr.route('/contact')
@pqr.route('/contact/')
def contact():
	page = {'id': "page-contact"}
	return render_template("contact.html", page = page)

@pqr.errorhandler(404)
def page_not_found(e):
	return "404"

if __name__ == '__main__':
	pqr.run()
