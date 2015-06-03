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
        try:
            json_data = json.load(json_file)
        except ValueError:
            print file

        try:
            molecular_mass = json_data['molecular_mass']
        except KeyError:
            molecular_mass = ""
        try:
            inchi = json_data['inchi']
        except KeyError:
            inchi = ""

        ##Creating a properties document
        properties_id = db.properties.insert_one({
        	"molecular_mass": molecular_mass,
        	"inchi": inchi
        }).inserted_id #Use this to link the molcules



        ##Mol2 File (Ignore for now)


        ##Creating a molcules document use the properties id to link
        	##For now lets just have a link here to the mol2 data
        try:
            inchikey = json_data['inchikey']
        except KeyError:
            inchikey = ""
        try:
            name = json_data['name']
        except KeyError:
            name = ""
        try:
            formula = json_data['formula']
        except KeyError:
            formula = ""
        try:
            tags = json_data['tags']
        except KeyError:
            tags = []
        try:
            synonyms = json_data['synonyms']
        except KeyError:
            synonyms = []

        molecules_id = db.molecules.insert_one({
        	"last_updated": datetime.now(),
        	"properties_id": properties_id,
        	"name": name,
                "inchikey": inchikey,
        	"formula": formula,
                "tags": tags,
                "synonyms": synonyms
        }).inserted_id #

        # pprint(data)
        json_file.close()

#########################

db.molecules.create_index([
    ("name", "text"),
    ("inchikey", "text"),
    ("formula", "text"),
    ("tags", "text"),
    ("synonyms", "text")
],
weights={
    "name": 50000,
    "tags": 50,
    "synonyms": 40,
    "formula": 30,
    "inchikey": 20
    }
)
