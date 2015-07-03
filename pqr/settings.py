import os
# __file__ refers to the file settings.py
APP_ROOT = os.path.dirname(os.path.abspath(__file__))   # refers to application_top
APP_JSON = os.path.join(APP_ROOT, 'static/data/json/')
APP_MOL2 = os.path.join(APP_ROOT, 'static/data/mol2/')
APP_ARTICLES = os.path.join(APP_ROOT, 'static/articles/')
