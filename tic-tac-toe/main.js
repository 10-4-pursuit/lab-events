function makeBoard() {
    const board = document.querySelector(".tic-tac-toe")
    for (let i=0; i<9; i++) {
        const square = document.createElement("div") 
        square.classList.add("empty", "square")
        board.appendChild(square)
    }
  }
  makeBoard()
  
  
  let currentPlayer = 'X';
  function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  }
  switchPlayer();
  
  function makeMove () {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('click', () => {
  
      if (square.classList.contains('empty')) {
  
        square.textContent = currentPlayer;
        square.classList.remove('empty');
  
        switchPlayer();
      }
    });
  });
  }
  makeMove()
  
  
  function reset() {
  const squaresContainer = document.querySelector('.tic-tac-toe');
  squaresContainer.innerHTML = ''; 
  
  makeBoard()
  
  const newSquares = document.querySelectorAll('.square');
  newSquares.forEach(square => {
    square.addEventListener('click', makeMove); 
  });
  }
  
  const resetButton = document.querySelector('button');
  resetButton.addEventListener('click', reset);