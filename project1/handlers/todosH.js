var model = require("../models/todosM");
var path = "./jsons/todos.json";

var GetTodos = (req, res) => {
    model.GetAllTodos()
    .then(data => {
        return res.send(data);
    })
    .catch(err => {
        return res.send('Error!');
    })
};

var CreateNewFood = (req, res) => {
    model.CreateFood()
        .then(data => {
            return fs.writeFile(path, JSON.stringify(data), (err) => {
                if(err){
                    return res.status(500).send('Could not save file');
                }
            });
        })
        .catch(err => {
            return res.send("Error!")
        });
    }   

module.exports = {
    GetTodos,
    CreateNewFood
}

