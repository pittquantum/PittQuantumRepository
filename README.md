# Pitt Quantum Repository

This is the code for the Pitt Quantum Repository maintained by @RitwikGupta and @vonbearshark.
The Pitt Quantum Repository is developed by the Hutchison and Lambrecht labs at the University of Pittsburgh Chemistry Department. Please see [here](http://pqr.pitt.edu/news/2015-07-01-open-data) for how to cite PQR.

## How to install
PQR is built upon Flask, a lightweight MVC in Python. PQR also uses MongoDB. We assume that the user has MongoDB already installed and running.

To run PQR locally, do the following:
1. Clone this repository
2. Make sure you have Python 2.7.6 or Python 2.7.9
3. Install `virtualenv`. On Debian systems, run `sudo pip install virtualenv`. On Windows, `pip install virtualenv`
4. Make sure you are in the root of the repo, aka the same level as this README. Then, run `virtualenv venv`. This will create a virtual environment named `venv` in the root of the repo.
5. On Linux systems, run `. venv/bin/activate` to activate the virtual enviroment. On Windows, run `.\venv\Scripts\activate`.
6. Run `pip install -r requirements.txt`

Also ensure you `scp` the `prq/static/data` folder from the server over VPN.

## Starting the Server
### Production
Start the server by running `uwsgi pqr.ini`. Use `sudo nohup uwsgi pqr.ini &` to let it run in the background.
If you are running for the first time, follow the steps below instead!

### Development
Start the server by running `./server.py [PORT NUMBER] [dev/prod]` on Linux systems. On Windows, run `.\venv\Scripts\python .\server.py [PORT NUMBER] [dev/prod]`.

## First run/Data update
The first time you run the server, or any time you update the data in the folders, you'll have to perform the following steps:
1. `cd scripts/`
2. (If you are updating the data only) `python clear_db.py`
3. `python recursive_iterate.py`
4. `cd ..` (Back to root)
5. `./server.py`

## Gulp

### Current Tasks
- `gulp less`: compiles and watches less files
- `gulp js`: compiles and watches js files
- `gulp compile`: both `less` and `js` command. Both are minified and included with sourcemaps in DEV, TEST, and PROD.
- `gulp test`: runs tape testing

### Install
To install the Node modules run `npm install` (assuming node is installed on your local machine). See `package.json` to see what will be installed. To install the Bower components run `bower install` (assuming the bower npm package is install on your local machine). See `bower.json` to see what will be installed.

## API Calls

### /api/weekly
**_GET_**
Returns a plain-text response with mimetype `text/plain` containing all previous molecules of the week.

### /api/browse/\{QUERY\}/\{SEARCHTYPE\}
**_GET_**
Returns a JSON file with mimetype `application/json` containing all the results for `QUERY` given `SEARCHTYPE`. Valid SEARCHTYPEs are `name`, `formula`, `inchi`, `tag`, or `synonym`.  

### /api/json/\{INCHIKEY\}
**_GET_**  
Returns a JSON file with mimetype `application/json` containing the data for the molecule indicated by `INCHIKEY`

### /api/mol/\{INCHIKEY\}
**_GET_**
Returns a MOL2 file with mimetype `chemical/mol2` containing the structure for the molecule indicated by `INCHIKEY`

### /api/inchikeys
**_GET_**
Returns a plain-text response with mimetype `text/plain` containing every single InChIKey PQR has.

### /api/status
**_GET_**
Returns a JSON file with information about the application

