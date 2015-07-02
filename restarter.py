#Kill python program running on port 5000

import os
import signal
from subprocess import check_output, call
import sys

if len(sys.argv) < 2:
	print "Please enter a port number! Exiting..."
	sys.exit()
elif len(sys.argv) < 3:
	print "Please enter 'prod' or 'dev' after port! Exiting..."
	sys.exit()

PORT = sys.argv[1]

if sys.argv[2] == 'prod':
	AFTER = ["nohup", "python", "server.py", PORT, "&"]
elif sys.argv[2] == 'dev':
	AFTER = ["python", "server.py", PORT]

# Command: sudo netstat -ap | grep :5000
results = check_output(["sudo", "netstat", "-ap", "|", "grep :" + PORT])

dictionary = results.split('\n')

pid = -1
for row in dictionary:
	values = row.split()
	if len(values) > 6:
		checking = values[len(values) - 1]
		if "/" in checking:
			program = checking.split('/')
			if program[1] == 'python':
				pid = program[0]

if pid != -1:
	print "Trying to kill process with pid = " + pid
	os.kill(int(pid), signal.SIGKILL)

if len(sys.argv) == 3:
	call(AFTER)
