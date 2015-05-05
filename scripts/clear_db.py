from pymongo import MongoClient
from pprint import pprint

client = MongoClient()
db = client.test

cursor = db.properties.find()
for document in cursor: 
	pprint(document)

##Show all molecules being created 
cursor = db.molecules.find()
for document in cursor: 
	pprint(document)

db.properties.remove({})
db.molecules.remove({})

cursor = db.properties.find()
for document in cursor: 
	pprint(document)

##Show all molecules being created 
cursor = db.molecules.find()
for document in cursor: 
	pprint(document)