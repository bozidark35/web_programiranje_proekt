const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
    //   res.send("Hello world!");
    res.sendFile(__dirname + "/Templates/index.html");
});