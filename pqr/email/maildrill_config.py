from flask.ext.mandrill import Mandrill

pqr = Flask(__name__)
pqr.config['MANDRILL_API_KEY'] = 'your api key'
pqr.config['MANDRILL_DEFAULT_FROM'] = 'admin@yourdomain.com'
mandrill = Mandrill(app)
mandrill.send_email(
    from_email='someone@yourdomain.com',
    subject='Subject',
    to=[{'email': 'someone@somedomain.com'}, {'email': 'someoneelse@someotherdomain.com'}],
    text='Hello World'
)