from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
	return "PQR: coming soon"

@app.route('/mol/<key>')
@app.route('/mol/<key>/')
def molecule(key):
	return "Test: " + key

if __name__ == '__main__':
	app.run()
