const { Router } = require("express");
const router = Router();
const db = require("../models");

router
  .route("/workouts")
  .get(async function (req, res) {
    const workouts = await db.Workout.find({});
    res.json(workouts);
  })
  .post(async function (req, res) {
    const { name } = req.body;
    const newWorkout = await db.Workout.create({ name });
    res.json(newWorkout);
  });

router.get("/workouts/:id", async function (req, res) {
  const { id } = req.params;
});

router.delete("/workouts/:id", function (req, res) {});

module.exports = router;
