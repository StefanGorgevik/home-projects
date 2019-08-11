const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

mongoose.Promise = global.Promise;

//connecting to the base

mongoose.connect("mongodb://localhost:27017/todos2", { useNewUrlParser: true }
)
.then(function() {  
    console.log("Database connected!");
})
.catch(function(err) {
    if(err) {
        console.log(err);
    }
}) 

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine("mustache", mustacheExpressInstance); //we are using this view engine
app.set("view engine", "mustache"); //any files with a mustache extension will be considered a template
app.set("views", __dirname + "/views"); //views in the current folder and in views folder

app.use("/", routes);

app.listen(8080, function () {
   console.log("Server is up and running")
});