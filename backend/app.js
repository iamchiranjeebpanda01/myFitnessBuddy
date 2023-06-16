const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Workout = require("./models/Workout")
const Diet = require("./models/Diet")
const cors = require("cors")

const app = express();

//* Middlewares
app.use(express.json()) 
app.use(cors())

//* MongoDB Connection
mongoose.connect("mongodb+srv://chiranjeebpanda01:5cVrQhC35UBB1ZN6@cluster0.fmnoz2f.mongodb.net/users_data");
mongoose.connection
.once("open", () => console.log("Good to go"))
.on("error", (error) => console.warn("Warning", error))

//* Route Definations
app.post("/login", (req,res) => {
    User.findOne({email: req.body.email, password: req.body.password})
    .then((user) => {
        if(user != null){
            res.json({status: "Success"})
        }
        else{
            res.json({status: "error"})
        }
    })
    .catch((error) => {
        res.json({status: "error", message: error})
    })
})

app.post("/signup", (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        if(user == null){
            const user = new User({email: req.body.email, password: req.body.password})
            user.save()
            .then(() => {
                res.json({status: "Success"})
            })
            .catch((error) => {
                res.json({status: "Error", message: error})
            })
        }
        else{
            res.json({status: "Error", message:"Already Registered! Try Logging In."})
        }
    })
})

app.put("/bmr", (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        user.set("bmrValue", req.body.bmrValue)
        user.save()
        .then(() => res.json({status: "Success"}))
        .catch((error) => {
            res.json({status: "Error", message: error})
        })
    })
})

app.get("/bmr/:email", (req, res) => {
    User.findOne({email: req.params.email})
    .then((user) => {
        res.json({status: "Success", bmrValue: user.bmrValue})
    })
    .catch((error) => {
        res.json({status: "Error", message: error})
    })
})

app.get("/workout/:id", (req, res) => {
    Workout.find({id: req.params.id})
    .then((workout) => {
        res.json(workout)
    });
})

app.get("/diet/:id", (req, res) => {
    Diet.find({id: req.params.id})
    .then((calories) => res.json(calories))
})

//* Server Port Defination
app.listen(5000, () => {
    console.log("listening on port 5000");
})