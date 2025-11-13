const express = require("express");

const server = express();

server.get("/user", (req, res) => {
    res.
    res.json({ name: "Slava" ,  })
})
server.post("/user", (req, res) => { 
    res.send("Hello Home")
})
server.delete("/", (req, res) => {
    res.send("Hello Home")
})
server.put("/", (req, res) => {
    res.send("Hello Home")
})

server.listen(3000)