function fetchData(url) {
  return fetch(url).then((res) => res.json());
}

fetch("/populatedworkout").then((r) => r.json());
//   .then(function (data) {
// console.log(data[0].reps[0]);
//   });

document
  .getElementById("button-home")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let type = document.querySelector("input[name=type]").value;
    let title = document.querySelector("input[name=title]").value;
    let duration = document.querySelector("input[name=duration]").value;
    let weight = document.querySelector("input[name=weight]").value;
    let reps = document.querySelector("input[name=reps]").value;
    let sets = document.querySelector("input[name=sets]").value;
    let distance = document.querySelector("input[name=distance]").value;
    if (!type || !title) {
      return;
    }
    // console.log(type);

    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      exercises: JSON.stringify({ type, title }),
    })
      //converts data to json
      .then((res) => res.json())
      .then(function (data) {
        //insert into page
        generateWorkouts({ type, title });
        // console.log(this.data.reps[0]);
      });
    console.log();
  });
function generateWorkouts(title, duration) {
  const html = `${title}: ${duration} 
  `;
  document.querySelector(".current-workout").append(html);
}

//TODO: Click save button and saves to workouts db
//TODO: once that is saved to a workout, clear current-workout box
// document
//   .querySelector("#save-workout")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const workout = document.querySelector("#current-workout").value;
//     console.log(workout);
//     fetch("/api/workout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       name: JSON.stringify({ workout }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   });
