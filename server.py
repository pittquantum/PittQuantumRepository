#!./venv/bin/python
from pqr import pqr
from pqr.views import redirect_table

with open("./pqr/redirects/redirect_file", "r") as redir:
    for line in redir:
        lineArr = line.strip().split(',')
        key = lineArr[0]
        value = lineArr[1]
        redirect_table[key] = value

pqr.run(debug=True)
