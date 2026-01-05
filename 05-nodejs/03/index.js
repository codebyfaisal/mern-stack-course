const http = require("http");
const add = require("./add")
const server = http.createServer((req, res) => {
    console.log(add(1, 2))

    const url = new URL(req.url, `http://${req.headers.host}`);
    switch (url.pathname) {
        case '/api/users':
            res.end("Hello Users")
            break;
        case '/about':
            res.end("Hello About")
            break;
        case '/service':
            res.end("Hello Service")
            break;
        case '/services':
            res.end("Hello Service")
            break;
        case '/Contact':
            res.end("Hello Contact")
            break;
        default:
            res.end("Hello Home")
            break;
    }
})

server.listen(3000)