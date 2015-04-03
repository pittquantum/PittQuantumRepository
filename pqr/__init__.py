from flask import Flask, url_for
import os
import re

pqr = Flask(__name__)

# Determines the destination of the build. Only usefull if you're using Frozen-Flask
pqr.config['FREEZER_DESTINATION'] = os.path.dirname(os.path.abspath(__file__))+'/../build'

# Function to easily find your assets
# In your template use <link rel=stylesheet href="{{ static('filename') }}">
pqr.jinja_env.globals['static'] = (
    lambda filename: url_for('static', filename = filename)
)


###############################################################################################################
# Custom Filters 

#Auto Subscript any sequence of digits 
def subnumbers_filter(input): 
	return re.sub("\d+", lambda val: "<sub>" + val.group(0) + "</sub>", input)

#Adding the filters to the environment 	
pqr.jinja_env.filters['subnumbers'] = subnumbers_filter
###############################################################################################################



from pqr import views
