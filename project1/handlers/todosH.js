var model = require("../models/todosM");

var GetTodos = (req, res) => {
    model.GetAllTodos()
    .then(data => {
        return res.render("todo",{todos: data});
    })
    .catch(err => {
        return res.send('Error!');
    })
};

module.exports = {
    GetTodos
}

