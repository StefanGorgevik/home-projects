var express = require("express");
var app = express();
var hbs = require("express-hbs");
var bodyParser = require("body-parser");
app.use(express.static("public"));

app.engine("hbs", hbs.express4());
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/todo", (req, res) => {
    res.render("todo")
})


var PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err) {
        return console.log(`The server cannot be started!`);
    }
    else {
        return console.log(`The server is started and listening on port ${PORT}!`)
    }
})