const submitBtn = document.getElementById("submit");
const guessInput = document.getElementById("guess");
const resultDisplay = document.getElementById("result");
const playAgainBtn = document.getElementById("playAgain");

submitBtn.addEventListener("click", checkAnswer);
playAgainBtn.addEventListener("click", playAgain);

let correctAnswer;

// Fetch a random song from a specific playlist
fetch("https://api.spotify.com/v1/playlists/{playlist_id}/tracks", {
  headers: {
    "Authorization": "Bearer {your_access_token}"
  }
})
  .then(response => response.json())
  .then(data => {
    // Pick a random song from the playlist
    const randomIndex = Math.floor(Math.random() * data.items.length);
    correctAnswer = data.items[randomIndex].track.name;

    // Hide the play again button
    playAgainBtn.style.display = "none";
  })
  .catch(error => console.error(error));

function checkAnswer() {
  if (guessInput.value.toLowerCase() === correctAnswer.toLowerCase()) {
    resultDisplay.textContent = "Correct! Well done.";
    playAgainBtn.style.display = "block";
  } else {
    resultDisplay.textContent = "Incorrect. Try again.";
  }
}

function playAgain() {
  guessInput.value = "";
  resultDisplay.textContent = "";
  playAgainBtn.style.display = "none";

  // Fetch a new random song
  fetch("https://api.spotify.com/v1/playlists/{playlist_id}/tracks")
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.items.length);
        correctAnswer = data.items[randomIndex].track.name;
  })
  .catch(error => console.error(error));
}