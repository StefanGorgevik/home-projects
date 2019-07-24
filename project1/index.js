var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var hbs = require('express-hbs');
var todos = require("./handlers/todosH");

// app.engine('hbs', hbs.express4());
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/todo", todos.GetTodos);
app.post('/todo', todos.CreateNewFood);

var PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err) {
        return console.log("Server could not be started!");
    }
    return console.log(`Server started successfully and is listening on port ${PORT}!`);
})

