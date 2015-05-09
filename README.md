# Pitt Quantum Repository
This is the code for the Pitt Quantum Repository maintained by @RitwikGupta and @JoshuaRogan.
The Pitt Quantum Repository is developed by the Hutchison and Lambrecht labs at the University of Pittsburgh Chemistry Department.

### How to install
PQR is built upon Flask, a lightweight MVC in Python. PQR also uses MongoDB. We assume that the user has MongoDB already installed and running.

To run PQR locally, do the following:  
1. Clone this repository  
2. Make sure you have Python 2.7.6 or Python 2.7.9  
3. Install `virtualenv`. On Debian systems, run `sudo pip install virtualenv`. On Windows, `pip install virtualenv`  
4. Make sure you are in the root of the repo, aka the same level as this README. Then, run `virtualenv venv`. This will create a virtual environment named `venv` in the root of the repo.  
5. On Linux systems, run `. venv/bin/activate` to activate the virtual enviroment. On Windows, run `.\venv\Scripts\activate`.  
6. Run `pip install -r requirements.txt`  

### Starting the server
Start the server by running `./server.py` on Linux systems. On Windows, run `.\venv\Scripts\python .\server.py`. If you are running for the first time, follow the steps below instead!

### First run
The first time you run the server, or any time you update the data in the folders, you'll have to perform the following steps:  
1. `cd scripts/`  
2. (If you are updating the data only) `python clear_db.py`  
3. `python recursive_iterate.py`  
4. `cd ..` (Back to root)  
5. `./server.py`  
