import os
import pqr
import unittest
import tempfile

class PQRTestCase(unittest.TestCase):

    mol = "ULGZDMOVFRHVEP-RWJQBGPGSA-N"

    def setUp(self):
        pqr.pqr.config['TESTING'] = True
        self.app = pqr.pqr.test_client()

    def tearDown(self):
        print "Done"

    def test_json_api(self):
        rv = self.app.get('/api/json/' + self.mol + '/')
        assert rv.headers['content-type'] == 'application/json'
        print '### JSON API endpoint is OK'
    
    def test_search_name(self):
        rv = self.app.get('/browse/?query=glucose&type=name')
        assert rv.status_code == 200
        print "### Name search is OK"

    def test_search_inchi(self):
        rv = self.app.get('/browse?query=GNBHRKFJIUUOQI-UHFFFAOYSA-N&type=inchi')
        assert rv.status_code == 302
        print "### InChIKey search is OK and redirecting properly"

    def test_browse_api(self):
        rv = self.app.get('/api/browse/water/name/')
        assert rv.headers['content-type'] == 'application/json'
        print '### Browse API endpoint is OK'

    def test_status_api(self):
        rv = self.app.get('/api/status/')
        assert rv.headers['content-type'] == 'application/json'
        print '### Status API endpoint is OK'

if __name__ == '__main__':
    unittest.main()
