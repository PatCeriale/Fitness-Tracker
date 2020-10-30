const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  title: {
    type: String,
    validate: [
      ({ length }) => length >= 1,
      "Insert text into title text area.",
    ],
  },
  body: {
    type: String,
    validate: [
      ({ length }) => length >= 1,
      "Insert text into workout text area.",
    ],
  },
});

const Rep = mongoose.model("Rep", WorkoutSchema);

module.exports = Rep;
