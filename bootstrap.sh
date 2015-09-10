apt-get update

#Build essentials for uwsgi
apt-get install build-essential python


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
echo "pqr.config['SECRET_KEY'] = \"gasdfebzaasdf234sdasdff543asdfl\"" >> pqr/secret_config.py

#Get some data for the JSON files



#Build the inital database
# python scripts/clear_db.py
# python 
