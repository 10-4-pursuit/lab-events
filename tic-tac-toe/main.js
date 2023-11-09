let isPlayerXTurn = true;
const gameOver = false;
const resetButton = document.querySelector("button");
let isGameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//function below makes the Tic Toe Toe Board
function makeBoard() {
  const board = document.createElement("div"); //create dive element
  board.classList.add("board"); //add a class called "board" to to div element

  //this create a row
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // Create a new element with the class "square empty"
    for (let j = 0; j < 3; j++) {
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.classList.add("empty");

      //if the game is active, you can run the makeMove function
      squareElement.addEventListener("click", (event) => {
        if (isGameActive) {
          makeMove(event.target);
        }
      });
      row.appendChild(squareElement); // this gets attached to "row"
    }
    board.appendChild(row); //this gets attached to "board"

    // Append the square element to the "tic-tac-toe" element
    const ticTacToeElement = document.querySelector(".tic-tac-toe"); // this selects the class
    ticTacToeElement.appendChild(board); //this gets attached to "tic tac toe"

    //this creates the style for the board
    board.style.display = "grid";
    board.style.maxWidth = "300px";
    board.style.justifyContent = "center";
    board.style.alignItems = "left";
    board.style.margin = "0 auto";
  }
  return board;
}
// this creates the board everytime the page reloads
window.onload = function () {
  const board = makeBoard();
};

//this function controls the logic behind placing x's and o's
function makeMove(squareElement) {
  //marks the square with "x" and "o" if empty
  if (squareElement.classList.contains("empty")) {
    squareElement.innerText = isPlayerXTurn ? "x" : "o";
    squareElement.classList.remove("empty");
    isPlayerXTurn = !isPlayerXTurn;
  }

  if (whoWon()) {
    console.log(`Player ${isPlayerXTurn ? "o" : "x"} wins!`);
    alert(`${isPlayerXTurn ? "o" : "x"} has won! Please hit reset to start the game again!`);
    isGameActive = false;
  }

  function whoWon() {
    for (let i = 0; i < winningConditions.length; i++) {
      const winCondition = winningConditions[i];
      const square1 = document.querySelectorAll(".square")[winCondition[0]];
      const square2 = document.querySelectorAll(".square")[winCondition[1]];
      const square3 = document.querySelectorAll(".square")[winCondition[2]];


      if (square1.innerText && square2.innerText && square3.innerText) {
        if (
          square1.innerText === square2.innerText &&
          square2.innerText === square3.innerText
        ) {
          return true;
        }
      }
    }
    return false;
  }
}

// Reset button functionality
resetButton.addEventListener("click", () => {
  console.log("this button is active!");
  isPlayerXTurn = true;
  isGameActive = true;

  // Clear the board
  const allSquares = document.querySelectorAll(".square");
  for (const square of allSquares) {
    square.textContent = "";
    square.classList.add("empty");
  }
});
