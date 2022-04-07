async function editChallengeHandler(event) {
  event.preventDefault();
  const title = document
    .querySelector('input[name="challenge-title"]')
    .value.trim();
  const challenge_text = document
    .querySelector('textarea[name="challenge-text"]')
    .value.trim();
  const due_date = document.querySelector(
    'input[name="challenge-due-date"]'
  ).value;
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/challenges/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      challenge_text,
      due_date,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(due_date);
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-challenge-form")
  .addEventListener("submit", editChallengeHandler);
