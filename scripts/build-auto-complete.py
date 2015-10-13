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

auto_complete_data = []
count = 0

for root, dirs, files in os.walk(DIRECTORY): # This path to replace
    for file in files:
        
        json_file = open(DIRECTORY + file[:2] + "/" + file, "r")
        try:
            json_data = json.load(json_file)
        except ValueError:
            print file

        # Has a wikilink
        if len(json_data['wiki']) > 1:
            count = count + 1

            if count % 100 == 0:
                print count

            try:
                molecular_mass = json_data['molecular_mass']
            except KeyError:
                molecular_mass = ""
            try:
                inchi = json_data['inchi']
            except KeyError:
                inchi = ""

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

            auto_complete_data.append({
                'name': name, 
                'formula': formula,
                'tags': tags,
                'synonyms': synonyms,
                'inchikey': inchikey,
                }
            )

            # pprint(auto_complete_data)
            json_file.close()

            if count >= 1000:
                if count == 1000:
                    with open('auto-complete.json', 'w') as outfile:
                        print 'Writing first 1000'
                        json.dump(auto_complete_data, outfile)
                        outfile.close()
                    auto_complete_data = []
                elif count % 5000 == 0:
                    file_num = str(int(count / 5000)); 
                    with open('auto-complete_' + file_num + '.json', 'w') as outfile:
                        print 'Writing ' + file_num + ' 5000'
                        json.dump(auto_complete_data, outfile)
                        outfile.close()
                    auto_complete_data = []

if len(auto_complete_data) > 0:
    file_num = str(int(count / 5000));
    with open('auto-complete_' + file_num + '.json', 'w') as outfile:
        print 'Writing final'
        json.dump(auto_complete_data, outfile)
        outfile.close()
    auto_complete_data = []
#########################

