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

  // Add an event listener to the window object for the 'load' event.
window.addEventListener('load', function() {
    // Call the makeBoard() function and append the board to the DOM.
    const board = makeBoard();
    document.body.appendChild(board);

    console.log("this is addEventListener")
   
  });