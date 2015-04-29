import os
import time

from datetime import datetime
from daemon import runner


class App():
    def __init__(self):
        self.stdin_path = '/dev/null'
        self.stdout_path = '/dev/tty'
        self.stderr_path = '/dev/tty'
        self.pidfile_path = '/var/run/mydaemon.pid'
        self.pidfile_timeout = 5

    def run(self):
        filepath = '/tmp/mydaemon/currenttime.txt'
        dirpath = os.path.dirname(filepath)
        while True:
            if not os.path.exists(dirpath) or not os.path.isdir(dirpath):
                os.makedirs(dirpath)
            f = open(filepath, 'w')
            f.write(datetime.strftime(datetime.now(), '%Y-%m-%d %H:%M:%S'))
            f.close()
            time.sleep(10)
   	def start_server():
   		#!./venv/bin/python
		from pqr import pqr
		pqr.run(debug = True)



app = App()
daemon_runner = runner.DaemonRunner(app)
daemon_runner.start_server()