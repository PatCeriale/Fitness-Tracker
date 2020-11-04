const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter an exercise type",
  },
  title: {
    type: String,
    trim: true,
    required: "Enter an exercise name",
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Exercises = mongoose.model("Exercises", ExerciseSchema);

module.exports = Exercises;
