#!./venv/bin/python
from pymongo import MongoClient
import datetime
import sys

from pqr import pqr
import pqr.views as pqv

if(not sys.argv[1]):
    print "You have to pass a port as a command line argument"
    sys.exit()

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

pqr.run(debug=True, host="0.0.0.0", port=int(sys.argv[1]))
