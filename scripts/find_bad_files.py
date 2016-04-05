# This program has to be run from the `scripts` directory
# Otherwise, and we should do this, the path in os.walk()
# should be replaced with the relative path from the python
# file that will run this file
import os
import json
from datetime import datetime
from os.path import join, getsize
from pprint import pprint

DIRECTORY = '../pqr/static/data/json/'

bad_files = 0
bad_files_list = []
missing_formula = 0
missing_formula_list = []

for root, dirs, files in os.walk(DIRECTORY): # This path to replace
    for file in files:
        # print file
        json_file = open(DIRECTORY + file[:2] + "/" + file, "r")
        try:
            json_data = json.load(json_file)
        except ValueError:
            bad_files += 1
            bad_files_list.append(file)

        try:
            molecular_mass = json_data['formula']
        except KeyError:
            missing_formula += 1
            missing_formula_list.append(file)

if len(bad_files_list) > 0:
    with open("bad_files.txt", "w") as out:
        out.write("\n".join(bad_files_list))

print missing_formula_list

if len(missing_formula_list) > 0:
    with open("missing_formula.txt", "w") as out:
        out.write("\n".join(missing_formula_list))
