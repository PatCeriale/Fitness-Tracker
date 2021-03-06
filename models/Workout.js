const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: "Enter a name",
    },
    day: {
      type: Date,
      default: Date().now,
    },
    exercises: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exercise",
        },
      ],
      default: Array,
    },
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true,
    },
  }
);
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
