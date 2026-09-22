const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Advice.om");
});

app.listen(3000, () => {
    console.log("Advice.om server is running on port 3000");
});