const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  id: String,
  muscle: String,
  exercise: String,
  sets: String,
});

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;