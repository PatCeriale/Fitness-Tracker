const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/deep-thoughts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.get("/reps", (req, res) => {
  db.Rep.find({})
    .then((dbRep) => {
      res.json(dbRep);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/workout", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).end();
    });
});

app.post("/api/workout", (req, res) => {
  db.Workout.create({ name: "Day 1" })
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch(({ message }) => {
      res.status(500).end();
    });
});

app.post("/submit", ({ body }, res) => {
  db.Rep.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate({}, { $push: { reps: _id } }, { new: true })
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/populatedworkout", (req, res) => {
  db.Workout.find({})
    .populate("reps")
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
