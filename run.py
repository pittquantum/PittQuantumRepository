from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
@app.route('/home/')
def index():
	page = {'id': "page-home"}
	return render_template("home.html", page = page)
	# return "Hello"

@app.route('/mol/<key>')
@app.route('/mol/<key>/')
@app.route('/mol/') #if no key lets default to the molecule of the day 
@app.route('/mol') #if no key lets default to the molecule of the day 
def molecule(key = -1):
	if key == -1:
		key = 999 #Molecule of the day value  
	page = {'id': "page-molecule", 'moleculeKey': key}
	return render_template("molecule.html", page = page)

@app.route('/news')
@app.route('/news/')
def news():
	page = {'id': "page-news"}
	return render_template("news.html", page = page)

@app.route('/browse')
@app.route('/browse/')
def browse():
	page = {'id': "page-browse"}
	return render_template("browse.html", page = page)

@app.route('/contact')
@app.route('/contact/')
def contact():
	page = {'id': "page-contact"}
	return render_template("contact.html", page = page)

@app.errorhandler(404)
def page_not_found(e):
	return "404"

if __name__ == '__main__':
	app.run()
