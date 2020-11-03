const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepsSchema = new Schema({
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

const Rep = mongoose.model("Rep", RepsSchema);

module.exports = Rep;
