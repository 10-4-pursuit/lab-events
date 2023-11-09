const ticTacToeBoard = document.querySelector('.tic-tac-toe');
const resetButton = document.querySelector('button');
let activePlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

function generateBoard() {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.index = i;
    square.addEventListener('click', takeAction);
    ticTacToeBoard.appendChild(square);
  }
}

function takeAction(event) {
  if (gameEnded) return;
  
  const square = event.target;

  if (!square.textContent && board[square.dataset.index] === '') {
    square.textContent = activePlayer;
    board[square.dataset.index] = activePlayer;

    if (declareWinner(activePlayer)) {
      alert(`Player ${activePlayer} wins!`);
      endGame();
    } else if (board.every(square => square !== '')) {
      alert("It's a draw!");
      endGame();
    } else {
      activePlayer = activePlayer === 'X' ? 'O' : 'X';
      updateDisplay();
    }
  }
}

function declareWinner(player) {
  const winFormats = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const format of winFormats) {
    const [a, b, c] = format;
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }

  return false;
}

function endGame() {
  gameEnded = true;
  updateDisplay();
}

function restartGame() {
  gameEnded = false;
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.textContent = '';
  });
  board = ['', '', '', '', '', '', '', '', ''];
  activePlayer = 'X';
  updateDisplay();
}

function updateDisplay() {
  const currentPlayerDisplay = document.querySelector('.current-player');
  currentPlayerDisplay.textContent = gameEnded ? 'Game Over' : `Current Player: ${activePlayer}`;
}

generateBoard();

resetButton.addEventListener('click', restartGame);
updateDisplay();
