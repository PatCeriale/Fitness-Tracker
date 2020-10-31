const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
    validate: [({ length }) => length >= 1, "Password should be longer."],
  },
  reps: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rep",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
