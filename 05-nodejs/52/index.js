const http = require("http");
const add = require("./add");

const server = http.createServer((req, res) => {
  console.log(add(1, 2));

  //   const url = new URL(req.url, `http://${req.headers.host}`);
  //   switch (url.pathname) {
  //     case "/api/users":
  //       res.end("Hello Users");
  //       break;
  //     case "/about":
  //       res.end("Hello About");
  //       break;
  //     case "/service":
  //       res.end("Hello Service");
  //       break;
  //     case "/services":
  //       res.end("Hello Service");
  //       break;
  //     case "/Contact":
  //       res.end("Hello Contact");
  //       break;
  //     default:
  //       res.end("Hello Home");
  //       break;
  //   }

  if (req.url === "/api/services") res.write("<p>From Services</p>");
  if (req.url === "/api/products") res.write("<p>From products</p>");
  if (req.url === "/api/about") res.write("<p>From about</p>");
  if (req.url === "/api/contact") res.write("<p>From contact</p>");
  if (req.url === "/api/careers") res.write("<p>From careers</p>");

  res.end("<h1>Hello Class</h1>");
});

server.listen(3000);
