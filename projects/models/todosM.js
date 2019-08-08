var fs = require('fs');
var path = "./jsons/todos.json";

var GetAllTodos = () => {
    return new Promise((success, fail) => {
        fs.readFile(path, "utf8", (err, data) => {
           if(err) {
               return fail(err);
           }
           return success(JSON.parse(data));
       })
   })
};

var CreateFood = () => {
    return new Promise((success,fail) => {
        var check = req.body.id != undefined && req.body.id != "" && req.body.id.length > 0;
        if(!check){
            return res.status(400).send('Bad request');
        }
        fs.readFile(path, 'utf8', (err, data) => {
            if(err){
                return fail(err)
            }
            jData = JSON.parse(data);
            jData.push(req.body);
            return success(jData);
        });
    })
}




module.exports = {
    GetAllTodos,
    CreateFood
}




