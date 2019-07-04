const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

var courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
]

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/api/courses", (req,res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    // res.send(req.params.id);
    const course = courses.find( c => c.id === Number(req.params.id));
    if(!course) {
        res.status(404).send("The course with the given ID was not found");
    }
    res.send(course);
})

app.post("/api/courses", (req, res) => {
    const result = Joi.validate(req.body, schema);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    };
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put("/api/courses/:id", (req,res) => {
    //look up the course
    //if not existing, return 404
    const course = courses.find( c => c.id === Number(req.params.id));
    if(!course) {
        res.status(404).send("The course with the given ID was not found");
    }

    //validate
    //if invalid return 400-bad request
    const result = validateCourse(req.body);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    };

    //update course
    course.name = req.body.name;
    res.send(course);
    //return the updated course
});



const port = process.env.PORT || 8080;

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server has started and it is listening on port ${port}...`);
});