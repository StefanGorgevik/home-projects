const express = require("express");
const app = express();
const path = require("path");
const members = require("./Members");
const logger = require("./middleware/logger");


app.use(express.static("public"));

//app.use(logger);
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get("/api/members", (req,res) => res.json(members));

app.get("/api/members/:id", (req, res) => {
    const found = members.some(member =>  member.id === parseInt(req.params.id));
    if(found) {
        var find = members.find(member => member.id === parseInt(req.params.id));
        if(find) {
            res.send(find);
        }
    }else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server started and is listening on port ${PORT}`);
});