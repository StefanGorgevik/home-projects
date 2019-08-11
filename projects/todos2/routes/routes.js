const router = require("express").Router(); //give my your router
const Todo = require("../models/todo");

router.get("/", function(req, res) {
    res.render("index", {});
});

router.post("/todos", function(req,res) { 
    //res.json(req.body); //body-parser will put everything from the form

    let newTodo = new Todo({
        description: req.body.description
    }); // will give you a newtodo
    newTodo.save()
            .then(function(result) {
                console.log(result);
                res.redurect("/")
            })
});

module.exports = router;