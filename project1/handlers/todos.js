var fs = require('fs');

var GetAllTodos = (req,res) => {
    fs.readFile("./food_list.json", "utf8", (err,data) =>{
        if(err) {
           return res.send("Could not read file!");
        }
    var jData = JSON.parse(data).sort((a,b) => {return a.id - b.id});
    res.send(jData);
    });
};

var postTodo = (req,res) => {
    var check = req.body.id != undefined
    && req.body.name != undefined && req.body.name != "" && req.body.name.length > 0
    && req.body.price != undefined
    && req.body.calories != undefined;

    if (!check) {
        return res.status(400).send('Bad request');
    }
    fs.readFile("./food_list.json", "utf8", (err,data) => {
        if(err) {
            return res.send("Could not read file!");
        };
        var jData = JSON.parse(data);
        var result = Joi.validate(req.body, schema);
        if(result.error) {
            return res.status(400).send(result.error.details[0].message);
        };
        var newFood = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            calories: req.body.calories
        };
        jData.push(newFood);
        fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(201).send(req.body);
        });
    });
}

module.exports = {
    GetAllTodos,
    postTodo
}