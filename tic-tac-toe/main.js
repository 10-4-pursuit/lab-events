
let isPlayerXTurn = true;


//function below makes the Tic Toe Toe Board
function makeBoard() {
  const board = document.createElement("div"); //create dive element
  board.classList.add("board"); //add a class called "board" to to div element

  //this create a row
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // Create a new element with the class "square"
    for (let j = 0; j < 3; j++) {
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.classList.add("empty");
      squareElement.addEventListener("click", () => makeMove()); //this calls makeMove function

      row.appendChild(squareElement);// this gets attached to "row"
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

window.onload = function () {
  const board = makeBoard();
};


//this function controls the logic behind placing x's and o's
function makeMove() {
  //Checks if the clicked square has the class `empty
  const square = event.target;
console.log(square)



  if (square.classList.contains("empty")) {
    square.innerText = isPlayerXTurn ? "x": "o"
    square.classList.remove("empty")
    isPlayerXTurn = !isPlayerXTurn //toggling is happening here
  }
}

/** const isValidAction = (tile) => {
  //         if (tile.innerText === 'X' || tile.innerText === 'O'){
  //             return false;
  //         } //this makes the player actions are valid
  
  //         return true;
  //     }; */