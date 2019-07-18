var express = require("express");
var app = express();
var hbs = require("express-hbs");
var bodyParser = require("body-parser");
app.use(express.static("public"));
var todos = require("./handlers/todos");

app.engine("hbs", hbs.express4());
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/todo", todos.GetAllTodos);
// app.get("/todo", todos.GetAllTodos() => {
//     res.render("todo");
// });


var PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err) {
        return console.log(`The server cannot be started!`);
    }
    else {
        return console.log(`The server is started and listening on port ${PORT}!`)
    }
})