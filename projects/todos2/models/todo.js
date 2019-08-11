const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({ //describe the doc that we will sent to Mongoose(schema takes an object that describes the doc)
    description: String, // name and type
    done: Boolean,
});
 
module.exports = mongoose.model("Todo", todoSchema);//you can update/edit/remove data and more
