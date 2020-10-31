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
    let title = document.querySelector("input[name=title]").value;
    let body = document.querySelector("textarea[name=body]").value;
    if (!title || !body) {
      return;
    }
    // console.log(title);

    fetch("/submit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    })
      //converts data to json
      .then((res) => res.json())
      .then(function (data) {
        //insert into page
        generateWorkouts(title, body);
        // console.log(this.data.reps[0]);
      });
    console.log();
  });
function generateWorkouts(name, body) {
  const html = `${name}: ${body} 
  `;
  document.querySelector(".current-workout").append(html);
}

document
  .querySelector("#save-workout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const workout = document.querySelector("#current-workout").textContent;
    console.log(workout);
  });
