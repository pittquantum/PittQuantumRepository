from pymongo import MongoClient
client = MongoClient('localhost', 27017)

db = client.test

dictOne = {}

dictOne["test"] = ["a", "b", "c", "d"]
dictOne["testTwo"] = {"LOL": "yay"}

test = db.test
test_id = test.insert_one(dictOne).inserted_id
print test_id
