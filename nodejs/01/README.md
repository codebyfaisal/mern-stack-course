# JavaScript
JavaScript is not a programming language. It does not have the functionalities that are required to run on the server side.

# Node.js
*Ryan Dahl* took the JavaScript (V8 engine) from the browser to the server by supporting Node.js runtime environment.

Node.js is a runtime environment, not a programming language. It allows us to run JavaScript on the server side.

# V8 Engine
The V8 engine is a JavaScript engine written in C++.

# NPM
Node.js comes with a package manager called npm.
We need to install Node.js on the server side, or simply install it on our computer.

npm is just a package manager, also known as a package store where we have millions of packages that can be installed on the server side, just like the app store or play store.

# File System
- Writing files (Creating files)
  - fs.writeFile(path, data, callback)
- Reading files
  - fs.readFile(path, callback)
- Appending files (Adding content to files)
  - fs.appendFile(path, data, callback)
- Copying files
  - fs.copyFile(source, destination, callback)
- Renaming files
   - fs.rename(oldPath, newPath, callback)
- Checking file existence
  - fs.existsSync(path)
- Deleting files
  - fs.unlink(path, callback)
- Creating directories
   - fs.mkdir(path, callback)
- Reading directories
  - fs.readdir(path, callback)
  - returns an array of file names
- Removing directories
  - fs.rmdir(path, callback)
  - only deletes empty directories
- Removing directories recursively
  - fs.rmdir(path, { recursive: true }, callback)
  - deletes directories even if they are not empty

> for reference https://nodejs.org/api/fs.html

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
> for reference https://nodejs.org/api/http.html