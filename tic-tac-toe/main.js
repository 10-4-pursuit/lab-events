const gameBoard = document.querySelector(".tic-tac-toe");

let isPlayerXTurn = true;

function makeMove(event) {
    const checkBox = event.target;
    if (checkBox.classList.contains("empty")) {
        checkBox.classList.remove("empty");
        checkBox.textContent = "X";
        if (isPlayerXTurn) {
            checkBox.textContent = "X";
        } else {
            checkBox.textContent = "O"
        }
        isPlayerXTurn = !isPlayerXTurn
    }
}

function makeBoard() {
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
      
        for (let j = 0; j < 3; j++) {
          const squareElement = document.createElement('div');
          squareElement.classList.add('square');
          squareElement.classList.add('empty');
      
          squareElement.addEventListener('click', makeMove);
      
          row.appendChild(squareElement);
        }
      
        gameBoard.appendChild(row);
      }
}

makeBoard();

function resetBoard() {
    const rowSelect = document.querySelectorAll(".row")
    for (let rows of rowSelect) {
        rows.remove()
    }
    makeBoard();
}

const resetButton = document.querySelector("button"); 

resetButton.addEventListener("click", resetBoard);

function gameOver() {

}

function announceWinner() {
    alert("Game over! The board is full.");
}