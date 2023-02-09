let data = [
  {
    "title": "Flappy bird",
    "description": "flAP FLAP",
    "link": "flappybird.html"
  },
  {
    "title": "jumping",
    "description": "Jumo juMp",
    "link": "jumping.html"
  },
  {
    "title": "falling",
    "description": "fall FaLL",
    "link": "falling.html"
  },
  {
      "title": "TicTacToe",
      "description": "play with o and x",
      "link": "TicTacToe.html"
  },
  {
      "title": "Brick Beater",
      "description": "beat ur mother",
      "link": "brickbeater.html"
  },
  {
      "title": "stacker",
      "description": "stack",
      "link": "jumping.html"
  }, 
  {
      "title": "colour",
      "description": "Jumo juMp",
      "link": "colour.html"
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
    if (item.title.toLowerCase().includes(searchValue) || item.description.toLowerCase().includes(searchValue)) {
      const result = document.createElement("div");
      result.classList.add("result");

      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.title;
      result.appendChild(link);

      const description = document.createElement("p");
      description.textContent = item.description;
      result.appendChild(description);

      resultWrapper.appendChild(result);
    }
  }

  resultsContainer.appendChild(resultWrapper);
});