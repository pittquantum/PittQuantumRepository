#Kill python program running on port 5000

import os
import signal
from subprocess import check_output, call

PORT = "5000"
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

call(AFTER)