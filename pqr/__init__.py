from flask import Flask, url_for, request, session, abort

import os
import re
import base64

pqr = Flask(__name__)

# Determines the destination of the build. Only usefull if you're using
# Frozen-Flask
pqr.config['FREEZER_DESTINATION'] = os.path.dirname(
    os.path.abspath(__file__)) + '/../build'
pqr.config['MANDRILL_API_KEY'] = 'NtXopXkrJBX6ikLlWywo2g' #move to hidden config file


# Function to easily find your assets
# In your template use <link rel=stylesheet href="{{ static('filename') }}">
pqr.jinja_env.globals['static'] = (
    lambda filename: url_for('static', filename=filename)
)

##########################################################################
# Form CSRF protection functions

@pqr.before_request
def csrf_protect():
    if request.method == "POST":
        token = session.pop('_csrf_token', None)
        if not token or token != request.form.get('_csrf_token'):
            abort(403)


def generate_csrf_token():
    if '_csrf_token' not in session:
        session['_csrf_token'] = some_random_string()
    return session['_csrf_token']


def some_random_string():
    return base64.urlsafe_b64encode(os.urandom(32))

pqr.jinja_env.globals['csrf_token'] = generate_csrf_token
##########################################################################


##########################################################################
# Custom Filters
# Auto Subscript any sequence of digits
def subnumbers_filter(input):
    return re.sub("\d+", lambda val: "<sub>" + val.group(0) + "</sub>", input)

#Aubscript digits after ~characters removing the ~character
def supnumbers_iupac_filter(input):
	return re.sub("~(.*?)~", lambda val: "<sup>" + val.group(0).replace('~', ' ') + "</sup>", input)
   
# Greek String Replacement
def replace_greek_filter(input):
    return re.sub("((([0-9]-?|\(\+\)-?)|(\(\-\)-?))(Alpha|Beta|Gamma))|((Alpha|Beta|Gamma)\-)", lambda val: "&" + val.group(0).lower() + ";", input, flags=re.I)

# Adding the filters to the environment
pqr.jinja_env.filters['subnumbers'] = subnumbers_filter
pqr.jinja_env.filters['supnumbersiupac'] = supnumbers_iupac_filter
pqr.jinja_env.filters['replacegreek'] = replace_greek_filter
assert pqr.jinja_env.filters['subnumbers']
##########################################################################

from pqr import views
