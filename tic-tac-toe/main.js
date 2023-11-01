/**
 The section below creates a player "x"
 */
//  const displayElement = document.createElement('section');
//  displayElement.classList.add('display');

//  const playerSpan = document.createElement('span');
//  playerSpan.classList.add('display-player');
//  playerSpan.classList.add('playerX');
//  playerSpan.textContent = 'X';

//  displayElement.appendChild(playerSpan);

//  const ticTacToeElement = document.querySelector('.tic-tac-toe');
//  ticTacToeElement.appendChild(displayElement);

function makeBoard() {
  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // Create a new element with the class "square".
    for (let j = 0; j < 3; j++) {
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.classList.add("empty");

      squareElement.addEventListener("click", () => {
        console.log("this is working!");
      });

      row.appendChild(squareElement);
    }
    Ï;

    board.appendChild(row);
  }

  // Append the square element to the "tic-tac-toe" element.
  const ticTacToeElement = document.querySelector(".tic-tac-toe");
  ticTacToeElement.appendChild(board);

  board.style.display = "grid";
  // board.style.gridTemplateColumns = '3fr';
  board.style.maxWidth = "300px";
  // board.style.gridTemplateRows = "3fr";
  board.style.justifyContent = "center";
  board.style.alignItems = "left";
  board.style.margin = "0 auto";

  return board;
}

window.onload = function () {
  const board = makeBoard();

};
