async function newChallengeHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="challenge-title"]').value;
  const challenge_text = document.querySelector(
    'textarea[name="challenge-text"]'
  ).value;
  const due_date = document.querySelector('input[name="due-date"]').value;

  const response = await fetch(`/api/challenges`, {
    method: "POST",
    body: JSON.stringify({
      title,
      challenge_text,
      due_date,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newChallengeHandler);
