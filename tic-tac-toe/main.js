// Write a function called makeBoard() that will generate 9 div with the class empty and another class square.

function makeBoard() {
    const board = document.createElement("div");
    board.classList.add("board");

    for(let i = 0; i < 3; i ++) {
        let row = document.createElement("div")
        row.classList.add("row")
        board.append(row)
    }
    for(let j = 0; j < 3; j ++) {
        let square = document.createElement("div")
        square.classList.add("empty")
        square.classList.add("square")
        row.append(square)
    }
let tictactoe = document.querySelector(".tic-tac-toe")
tictactoe.appendChild(board)
board.style.display = "grid"
board.style.maxWidth = "300px"
}

let isPlayerXTurn = true;

function makeMove(event) {
    const checkBox = event.target;
    
}

    
//     ")
//         const row=document.createEleement("div");
//     row.classList.add("row");

//     for (let j = 0; j < 3; j++) {
//         const row = document.createElement("div");
//         squareElement.classList.add("square");
//         squareElement.classList.add("empty");

//         squareElement.addEventListener("click", () => { makeMove());
//         })
//     }

// }
// }
    
// const square = event.target
// square.innerText = "x";


//  Call makeBoard() on page load so that 9 squares appear and the board is 3 x 3 squares.

//  Write a function called makeMove() that is an event handler for the divs with the class of square that

// Checks if the clicked square has the class empty.
// If the square has the class empty add either an X or an O inside the square, remove the class empty and write some logic so that the next time this function is called the other player has a play (first play an X then an O, then an X...).
// Players should NOT be able to change a full square.
//  Add a listener to the reset button and write an event handler function called reset, that removes the squares and then calls makeBoard() to reset the board.