const ticTacToeBoard = document.querySelector(".tic-tac-toe");
const resetButton = document.querySelector("button");

let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";

function generateBoard() {
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.index = i; 
      square.addEventListener('click', takeAction);
      ticTacToeBoard.appendChild(square);
    }
  }

  function takeAction(e) {
    const square  = e.target;

    if (!square.textContent && board[square.dataset.index] === "") {
        square.textContent = player;
        board[square.dataset.index] = player;

        player = player === "X" ? "O" : "X";

        if (checkForWinner()) {
            alert(`The winner is ${player}`);
            resetBoard();
        } else if (board.every((square) => square !== "")) {
            alert("It's a draw!");
            resetBoard();
        }
            
        }        
    }

    function checkForWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
            
        }
        return false;
    }

    function resetBoard() {
        const square = document.querySelectorAll(".square");
        square.forEach((square) => {
            square.textContent = "";
        });
        board = ["", "", "", "", "", "", "", "", ""];
        player = "X";
    }


  generateBoard()

  resetButton.addEventListener("click", resetBoard)