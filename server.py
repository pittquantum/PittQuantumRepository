#!./venv/bin/python
from pymongo import MongoClient

from pqr import pqr
import pqr.views as pqv

# Opens the redirect file and stores in the redirect_table
# dictionary in the views.py file
with open("./pqr/redirects/redirect_file", "r") as redir:
    for line in redir:
        lineArr = line.strip().split(',')
        key = lineArr[0]
        value = lineArr[1]
        pqv.redirect_table[key] = value

# Get number of molecules in database
client = MongoClient()
db = client.test
pqv.amount_mol = db.molecules.count()
client.close()

pqr.run(debug=True)
