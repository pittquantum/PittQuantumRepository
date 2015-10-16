#Vagrant Bootstrap for Ubuntu Server

apt-get update

#Build essentials for uwsgi
sudo apt-get install build-essential python

#Install MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start

#Get and install PIP
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py
rm get-pip.py

#Install virtualenv
cd /vagrant/
sudo pip install virtualenv
sudo virtualenv venv

# Install requirements
. venv/bin/activate
pip install -r requirements.txt

#Setup secret key file (Add check so it only runs if it isn't there)
echo "from pqr import pqr" >> pqr/secret_config.py

PQR_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 128 | head -n 1)
export PQR_KEY

echo "pqr.config['SECRET_KEY'] = $PQR_KEY" >> pqr/secret_config.py

#Get some data for the JSON files

#Build the inital database
# python scripts/clear_db.py
# python 
