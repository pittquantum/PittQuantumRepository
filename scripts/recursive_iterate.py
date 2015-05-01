# This program has to be run from the `scripts` directory
# Otherwise, and we should do this, the path in os.walk()
# should be replaced with the relative path from the python
# file that will run this file

import os
from os.path import join, getsize

for root, dirs, files in os.walk('../pqr/static/data/json'): # This path to replace
    for file in files:
        print file #replace this print with insert to Mongo
