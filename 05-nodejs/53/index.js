import http from "http";
import fs from "fs";

let products = [
  { id: 1, task: "homework" },
  { id: 2, task: "homework" },
  { id: 3, task: "homework" },
  { id: 4, task: "homework" },
  { id: 5, task: "homework" },
];

const server = http.createServer((req, res) => {
  const prd = req.url.split("/");

  if (req.method === "GET") return res.end(JSON.stringify(products));

  if (req.method === "POST") {
    const prdObj = {
      id: Number(prd[1]),
      task: prd[2].split("%20").join(" "),
    };

    products.push(prdObj);
    return res.end(JSON.stringify(products));
  }

  if (req.method === "DELETE") {
    const updatedProducts = products.filter((p) => p.id !== Number(prd[1]));
    products = updatedProducts;

    return res.end(JSON.stringify(products));
  }

  res.end("Nothing");
});

server.listen(3000, () => {
  console.log("Server started");
});
