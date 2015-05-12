# This program has to be run from the `scripts` directory
# Otherwise, and we should do this, the path in os.walk()
# should be replaced with the relative path from the python
# file that will run this file
import os
import json
from pymongo import MongoClient
from datetime import datetime
from os.path import join, getsize
from pprint import pprint

DIRECTORY = '../pqr/static/data/json/'

client = MongoClient()
db = client.test

for root, dirs, files in os.walk(DIRECTORY): # This path to replace
    for file in files:
    	# print file
        json_file = open(DIRECTORY + file[:2] + "/" + file, "r")
        json_data = json.load(json_file)


        ##Creating a properties document
        properties_id = db.properties.insert_one({
        	"molecular mass": json_data['molecular mass'],
        	"inchi": json_data['inchikey']
        }).inserted_id #Use this to link the molcules



        ##Mol2 File (Ignore for now)


        ##Creating a molcules document use the properties id to link
        	##For now lets just have a link here to the mol2 data
        molecules_id = db.molecules.insert_one({
        	"last_updated": datetime.now(),
        	"properties_id": properties_id,
        	"inchikey": json_data['inchikey'],
        	"name": json_data['name'],
        	"formula": json_data['formula'],
		    "tags": json_data['tags'],
            "synonyms": json_data['synonyms']
        }).inserted_id #



        # pprint(data)
        json_file.close()

#########################


##Show all properties being created
cursor = db.properties.find()
for document in cursor:
	pprint(document)

##Show all molecules being created
cursor = db.molecules.find()
for document in cursor:
	pprint(document)

db.molecules.create_index([
    ("name", "text"),
    ("inchikey", "text"),
    ("formula", "text"),
    ("tags", "text"),
    ("synonyms", "text")
])
