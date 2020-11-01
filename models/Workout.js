const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({
//   name: {
//     type: String,
//     unique: true,
//     validate: [({ length }) => length >= 1, "Password should be longer."],
//   },
//   reps: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Rep",
//     },
//   ],
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
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
      },
    ],
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
