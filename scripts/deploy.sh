### server username
name = 'root' 
### server host
host = '127.0.0.1'
### target folder
path = '/path/to/production/folder'

### transfer source code to server
scp -r src $name@$host:$path

### transfer package.json to server
scp package.json $name@$host:$path

### transfer tsconfig.json to server