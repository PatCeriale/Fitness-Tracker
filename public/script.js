fetch("/populatedworkout")
  .then((r) => r.json())
  .then(function (data) {
    // console.log(data[0].reps[0]);
  });

document
  .getElementById("button-home")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.querySelector("input[name=title]").value;
    let body = document.querySelector("textarea[name=body]").value;
    if (!title || !body) {
      return;
    }
    console.log(title);

    axios("/submit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    })
      //   .then((r) => r.json())
      .then(console.log);
  });
