from pymongo import MongoClient
from pprint import pprint

client = MongoClient()
db = client.test

db.properties.drop_indexes()
db.molecules.drop_indexes()
