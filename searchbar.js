let data = [
  {
    "title": "Flappy Ball",
    "link": "flappybirdlobby.html"
  },
  {
    "title": "Block Jumper",
    "link": "jumpinglobby.html"
  },
  {
    "title": "Ball Fall",
    "link": "fallinglobby.html"
  },
  {
      "title": "TicTacToe",
      "link": "TicTacToe.html"
  },
  {
      "title": "Brick Beater",
      "link": "brickbeaterlobby.html"
  },
  {
      "title": "Stack Tower",
      "link": "stackerlobby.html"
  }, 
  {
      "title": "Brain Teaser",
      "link": "colourlobby.html"
  },
];

const input = document.getElementById("search");
const resultsContainer = document.getElementById("results");

input.addEventListener("input", function() {
  while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
  }

  const searchValue = input.value.toLowerCase();

  if (!searchValue) {
    return;
  }

  const resultWrapper = document.createElement("div");
  resultWrapper.classList.add("result-wrapper");

  for (let item of data) {
    if (item.title.toLowerCase().includes(searchValue)) {
      const result = document.createElement("div");
      result.classList.add("result");

      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.title;
      result.appendChild(link);

      resultWrapper.appendChild(result);
    }
  }

  resultsContainer.appendChild(resultWrapper);
});