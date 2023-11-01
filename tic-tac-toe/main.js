const ticTacToeBoard = document.querySelector('.tic-tac-toe');
const resetButton = document.querySelector('button');
let activePlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];


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
  const square = event.target;

  
  if (!square.textContent && board[square.dataset.index] === '') {
    square.textContent = activePlayer;
    board[square.dataset.index] = activePlayer;
    activePlayer = activePlayer === 'X' ? 'O' : 'X';

    if (delcareWinner()) {
      alert(`Player ${square.textContent} wins!`);
      restartGame();
    } else if (board.every(square => square !== '')) {
      alert("It's a draw!");
      restartGame();
    }
  }
}


function delcareWinner() {
  const winFormats = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  for (const format of winFormats) {
    const [a, b, c] = format;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false; 
}


function restartGame() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.textContent = '';
  });
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
}





generateBoard();


resetButton.addEventListener('click', restartGame);

