const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("express-hbs");
const path = "./todos.json"
const fs = require("fs");
const todos = require("./handlers/todosH");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.engine("hbs", hbs.express4());
app.set("view engine", "hbs");
app.set(" views", __dirname + "/views");

app.get("/todos", todos.getTodos);

app.post("/todos", todos.createNewTodo);

app.patch("/todos", todos.PartialUpdateTodo);

app.delete("/todos/:id", todos.DeleteTodo)

app.listen(8080, (err) => {
    if(err) {
        return console.log(err);
    }
    return console.log("Server has started successfully!");
});