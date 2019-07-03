const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi!");
});

app.get("/api/courses", (req,res) => {
    res.send([1,2,3]);
});

app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id);
})

const port = process.env.PORT || 8080;

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server has started and it is listening on port ${port}...`);
});