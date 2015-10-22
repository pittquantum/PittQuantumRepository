#Vagrant Bootstrap for Ubuntu Server

apt-get update

#Build essentials for uwsgi
apt-get install build-essential python -y
apt-get install python2.7-dev -y

#Install NGnix
apt-get install nginx -y
mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
echo 'worker_processes 1;

events {

    worker_connections 1024;

}

http {

    sendfile on;

    gzip              on;
    gzip_http_version 1.0;
    gzip_proxied      any;
    gzip_min_length   500;
    gzip_disable      "MSIE [1-6]\.";
    gzip_types        text/plain text/xml text/css
                      text/comma-separated-values
                      text/javascript
                      application/x-javascript
                      application/javascript
                      application/atom+xml
                       font/woff
                        application/font-woff
                        font/truetype
                        font/opentype
                        font/eot
                        application/vnd.ms-fontobject
                        image/svg+xml
                        image/x-icon
                        image/vnd.microsoft.icon;

    # Configuration containing list of application servers
    upstream uwsgicluster {

         server 127.0.0.1:8080;
        # server 0.0.0.0;
        # ..
        # .

    }

    # Configuration for Nginx
    server {
	   

        # Running port
        listen 80;


        # Settings to by-pass for static files 
        location ^~ /static/  {

            # Example:
            # root /full/path/to/application/static/file/dir;
            root /vagrant/pqr/;
		       include /etc/nginx/mime.types;

              # Mol2 Files
                location ~* \.(?:mol2)$ {
                  expires 1M;
                  access_log off;
                  add_header Cache-Control "public";
                }

              
              # Media: images, icons, video, audio, HTC
                location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
                  expires 1M;
                  access_log off;
                  add_header Cache-Control "public";
                }

                # CSS and Javascript
                location ~* \.(?:css|js)$ {
                  expires 1y;
                  access_log off;
                  add_header Cache-Control "public";
                }
        }


        # Serve a static file (ex. favico) outside static dir.
        location = /favicopqr.ico  {

            root /pqr/favico.ico;

        }

        # Proxying connections to application servers
        location / {
            include            uwsgi_params;
            uwsgi_pass         uwsgicluster;

            proxy_redirect     off;
            proxy_set_header   Host $host;
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Host $server_name;

        }
    }
}
' > /etc/nginx/nginx.conf

service nginx restart

#Install MongoDB
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list
apt-get update
apt-get install -y mongodb-org 
service mongod start

#Get and install PIP
wget https://bootstrap.pypa.io/get-pip.py -q
python get-pip.py
rm get-pip.py

#Install virtualenv
cd /vagrant/
pip install virtualenv
virtualenv venv

# Install requirements
. venv/bin/activate
pip install -r requirements.txt



#Setup secret key file (Add check so it only runs if it isn't there)
echo "from pqr import pqr" > pqr/secret_config.py

PQR_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 128 | head -n 1)
export PQR_KEY

echo "pqr.config['SECRET_KEY'] = \"$PQR_KEY\"" >> pqr/secret_config.py


#Setup default pqr.ini
echo "[uwsgi]
socket = 127.0.0.1:8080
wsgi-file = uwsgi.py
callable = pqr
processes = 4
" > pqr.ini

#Get some data for the JSON files

#Build the inital database
# python scripts/clear_db.py
# python 
