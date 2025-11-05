const http = require("http");
const { URL } = require('url')

const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = myUrl.pathname.split('/')[1]
    console.log(pathname)
    if (pathname === "users")
        res.end("Hello Users")
    else if (pathname === "about")
        res.end("Hello About")
    else if (pathname === "service")
        res.end("Hello Service")
    else if (pathname === "Contact")
        res.end("Hello Contact")
    else
        res.end("Hello Home")
})

server.listen(3000)