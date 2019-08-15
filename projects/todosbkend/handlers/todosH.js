var fs = require('fs');
const path = "./todos.json";

var getTodos = (req,res) => {
    fs.readFile(path, "utf8", (err, data) => {
        if(err) {
            return res.send("Could not save file!");
        }
        jData = JSON.parse(data);
        res.render("todos", {data:jData});
    })
}

var createNewTodo = (req, res) => {
    var check = req.body.todo != undefined && req.body.todo != "" && req.body.todo.length > 0;
    if(!check){
        return res.status(400).send('Bad request');
    }
    fs.readFile(path, "utf8", (err, data) => {
        if(err) {
            return res.send("Could not read file!");
        }
        jData = JSON.parse(data);
        var newTodo = {todo: req.body.todo, id: req.body.id};
        
        jData.push(newTodo);
        jData.sort((a, b) => (a.id > b.id) ? 1 : -1)
        fs.writeFile(path, JSON.stringify(jData), (err) => {
            if(err) {
                return res.send(500).send("Could not save file!");
            }
            return res.status(201).redirect("/todos");
        });
    });
};

var PartialUpdateTodo = (req, res) => {
    var check = req.body.todoBot != undefined && req.body.todoBot != "" && req.body.todoBot.length > 0 && req.body.idBot > 0 && req.body.idBot !== undefined && req.body.idBot !== "";
    console.log(req.body.todoBot)
    console.log(req.body.idBot)
    console.log(check);
    if(!check){
        return res.status(400).send('Bad request');
    }
    fs.readFile(path, "utf8", (err, data) => {
        if(err) {
            return res.send("Could not save file");
        }
        var jData = JSON.parse(data);
        var index = null;
        for(let i = 0; i < jData.length; i++) {
            if(jData[i].id == req.body.idBot) {
                index = i;
                break;
            }
        }
        for(var i in jData[index]){
            if(req.body[i] != undefined && req.body[i] != ""){
                jData[index][i] = req.body[i];
            }
        }
        fs.writeFile(path, JSON.stringify(jData), (err) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(200).redirect("/todos");
        });
    })
};



var DeleteTodo = () => {

}

module.exports = {
    createNewTodo,
    getTodos,
    PartialUpdateTodo,
    DeleteTodo
}