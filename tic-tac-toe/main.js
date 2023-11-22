
function makeBoard() {
    const wrapper = document.getElementById("wrapper");
  
    
    wrapper.innerHTML = "";
  
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("empty", "square");
      square.addEventListener("click", makeMove);
      wrapper.appendChild(square);
    }
  }
  
  // Call makeBoard on page load
  document.addEventListener("DOMContentLoaded", function () {
    makeBoard();
  });
  
  //  player 1 "X"
let currentPlayer = "X"; 

function makeMove() {
  if (this.classList.contains("empty")) {
    this.textContent = currentPlayer;
    this.classList.remove("empty");

    // Switch to player 2 "O"
     currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Modify your existing code to include the reset functionality
document.addEventListener("DOMContentLoaded", function () {
    makeBoard(); // Call makeBoard on page load
  
    const resetButton = document.querySelector("button");
    resetButton.addEventListener("click", reset);
  });
  
  function reset() {
    makeBoard(); // Call makeBoard to reset the board
// Reset the player to "X"
    currentPlayer = "X"; 
  }
  