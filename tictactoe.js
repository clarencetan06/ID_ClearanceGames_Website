$(document).ready(function() {
    var turn = "X";
    var cells = $(".cell");
    var gameOver = false;
  
    $(".cell").click(function() {
      if (!gameOver) {
        $(this).text(turn);
        checkForWinner();
        if (turn === "X") {
          turn = "O";
        } else {
          turn = "X";
        }
      }
    });
  
    $("#reset-button").click(function() {
      resetGame();
    });
  
    function checkForWinner() {
      // Check for horizontal wins
      for (var i = 0; i < 9; i += 3) {
        if (cells.eq(i).text() === cells.eq(i + 1).text() && cells.eq(i + 1).text() === cells.eq(i + 2).text() && cells.eq(i).text() !== "") {
          gameOver = true;
          return;
        }
      }
  
      // Check for vertical wins
      for (var j = 0; j < 3; j++) {
        if (cells.eq(j).text() === cells.eq(j + 3).text() && cells.eq(j + 3).text() === cells.eq(j + 6).text() && cells.eq(j).text() !== "") {
          gameOver = true;
          return;
        }
      }
  
      // Check for diagonal wins
      if (cells.eq(0).text() === cells.eq(4).text() && cells.eq(4).text() === cells.eq(8).text() && cells.eq(0).text() !== "") {
        gameOver = true;
        return;
      }
      if (cells.eq(2).text() === cells.eq(4).text() && cells.eq(4).text() === cells.eq(6).text() && cells.eq(2).text() !== "") {
        gameOver = true;
        return;
      }
    }
  
    function resetGame() {
      turn = "X";
      cells.text("");
      gameOver = false;
    }
  });
  