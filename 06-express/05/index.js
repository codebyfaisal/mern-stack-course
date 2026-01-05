const express = require("express");

const app = express();

app.use((req, res, next) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url.searchParams.get("username"))
    next();
})

app.get("/login", (req, res, next) => {
    return next(new Error("Something went wrong"))
})

app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).send("Something went wrong")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})