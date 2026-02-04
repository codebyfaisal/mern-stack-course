# Protocols
Working on internet we need to use protocols like HTTP, HTTPS, FTP, SMTP, etc.
It comes by default in your laptop or computer OS's which can be used by installed browsers and other software.

# HTTP
HTTP is a protocol used for communication between client and server.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
})

server.listen(3000)
```

# HTTP Request Structure
## URL
Uniform Resource Locator

in server side we need to get url from request object mean from client via incoming request

'https://example.com?username=slava&password=123'
'https://example.com/users?username=slava&password=123'

## Query Params
username=slava&password=123


> for reference https://nodejs.org/api/http.html