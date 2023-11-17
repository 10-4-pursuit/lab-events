let moves = "X"

function createBoard() {
    const board = document.querySelector('.tic-tac-toe');
    
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', allowMove);
        board.append(square);
    }
};

function allowMove(event) {
    const square = event.target;
    if (square.className === 'square' && square.textContent === '') {
        square.textContent = moves;
        moves = moves === 'X' ? 'O' : 'X';
    }
}

function resetBoard() {
    const resetButton = document.querySelector('button');
    resetButton.addEventListener('click', () => {
        moves = 'X';
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.textContent = '';
        });
    });
}


createBoard();
resetBoard();
