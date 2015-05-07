from pymongo import MongoClient
from pprint import pprint

client = MongoClient()
db = client.test

print "# Properties Documents: " + str(db.properties.count())
print "# Molecule Documents: " + str(db.molecules.count())

print "Deleting"
db.properties.drop()
db.molecules.drop()

print "# Properties Documents: " + str(db.properties.count())
print "# Molecule Documents: " + str(db.molecules.count())
