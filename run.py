from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
	return "PQR: coming soon"

if __name__ == '__main__':
	app.run()
