function makeBoard(){
    const board = document.createElement('div');
    board.classList.add('tic-tac-toe');
  
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.classList.add('square', 'empty');
  
      board.appendChild(square);
    }
  
    return board;
  }