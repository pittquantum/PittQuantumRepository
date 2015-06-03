#!./venv/bin/python
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from pymongo import MongoClient
import datetime

from pqr import pqr
import pqr.views as pqv

# Opens the redirect file and stores in the redirect_table
# dictionary in the views.py file
with open("./pqr/server_start/redirect_file", "r") as redir:
    for line in redir:
        lineArr = line.strip().split(',')
        key = lineArr[0]
        value = lineArr[1].strip()
        pqv.redirect_table[key] = value

# Set the Molecule of the Week
with open("./pqr/server_start/mol_of_the_week", "r") as molfile:
    for line in molfile:
        if line.strip().split(",")[0] == datetime.date.isoformat(datetime.datetime.now()):
            pqv.MOLECULE_OF_THE_WEEK = line.strip.split(",")[1].strip()
            break

# Get number of molecules in database
client = MongoClient()
db = client.test
pqv.amount_mol = db.molecules.count()
client.close()

http_server = HTTPServer(WSGIContainer(pqr))
http_server.listen(80)
IOLoop.instance().start()
