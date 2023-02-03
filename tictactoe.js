$(document).ready(function() {
  var turn = "X";
  var cells = $(".cell");
  var gameOver = false;
  var winDisplay = $("#win-display");
  var modal = $("#win-modal");
  var closeButton = $(".close");
  var resetButton = $("#reset-button");
  var playerXWins = 0;
  var playerOWins = 0;
  var ties = 0;

  $(".cell").click(function() {
    if (!gameOver && $(this).text() === "") {  // Check if the cell is empty
      $(this).text(turn);
      checkForWinner();
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  });

  closeButton.click(function() {
    modal.hide();
  });

  resetButton.click(function() {
    resetGame();
    modal.hide();
  });

  function checkForWinner() {
      // Check for horizontal wins
      for (var i = 0; i < 9; i += 3) {
        if (cells.eq(i).text() === cells.eq(i + 1).text() && cells.eq(i + 1).text() === cells.eq(i + 2).text() && cells.eq(i).text() !== "") {
          gameOver = true;
          $("#win-display").text(cells.eq(i).text() + " wins!");
          cells.eq(i).addClass("blink");
          cells.eq(i + 1).addClass("blink");
          cells.eq(i + 2).addClass("blink");
          if (cells.eq(i).text() === "X"){
            playerXWins ++;
          }
          else if (cells.eq(i).text() === "O"){
            playerOWins ++;
          }
          return;
        }
      }
    
      // Check for vertical wins
      for (var j = 0; j < 3; j++) {
        if (cells.eq(j).text() === cells.eq(j + 3).text() && cells.eq(j + 3).text() === cells.eq(j + 6).text() && cells.eq(j).text() !== "") {
          gameOver = true;
          $("#win-display").text(cells.eq(j).text() + " wins!");
          cells.eq(j).addClass("blink");
          cells.eq(j + 3).addClass("blink");
          cells.eq(j + 6).addClass("blink");
          if (cells.eq(j).text() === "X"){
            playerXWins ++;
          }
          else if (cells.eq(j).text() === "O"){
            playerOWins ++;
          }
          return;
        }
      }
    
      // Check for diagonal wins
      if (cells.eq(0).text() === cells.eq(4).text() && cells.eq(4).text() === cells.eq(8).text() && cells.eq(0).text() !== "") {
        gameOver = true;
        $("#win-display").text(cells.eq(0).text() + " wins!");
        cells.eq(0).addClass("blink");
        cells.eq(4).addClass("blink");
        cells.eq(8).addClass("blink");
        if (cells.eq(0).text() === "X"){
          playerXWins ++;
        }
        else if (cells.eq(0).text() === "O"){
          playerOWins ++;
        }
        return;
      }
      if (cells.eq(2).text() === cells.eq(4).text() && cells.eq(4).text() === cells.eq(6).text() && cells.eq(2).text() !== "") {
        gameOver = true;
        $("#win-display").text(cells.eq(2).text() + " wins!");
        cells.eq(2).addClass("blink");
        cells.eq(4).addClass("blink");
        cells.eq(6).addClass("blink");
        if (cells.eq(2).text() === "X"){
          playerXWins ++;
        }
        else if (cells.eq(2).text() === "O"){
          playerOWins ++;
        }
        return;
      }
      
       // Check if all cells are filled and there's no winner
  var filledCells = 0;
  for (var i = 0; i < 9; i++) {
    if (cells.eq(i).text() !== "") {
      filledCells++;
    }
  }
  
  if (filledCells === 9 && !gameOver) {
    $("#win-display").text("Tie");
    ties ++;
  }
  $("#player-x-wins").text("Player X: " + playerXWins);
  $("#player-o-wins").text("Player O: " + playerOWins);
  $("#ties").text("Tie: " + ties);
  }

function resetGame() {
  turn = turn === "X" ? "O" : "X";  // Change the order of who starts first
  cells.text("");
  gameOver = false;
  filledCells = 0;
  cells.removeClass("blink");
}

$("#reset-button").click(function() {
    resetGame();
    $("#win-display").text("");
  });
});