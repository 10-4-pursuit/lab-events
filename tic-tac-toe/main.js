function markBoard() {
    let ticTakToe = document.querySelector(".tic-tac-toe")
  
    for (let i = 0; i < 3; i++) {
      let row = document.createElement("div")
      row.classList.add("row")
      fillRow(row)
      ticTakToe.append(row)
    }
  
  }
  
  function fillRow(row) {
    for (let i = 0; i < 3; i++) {
      let square = document.createElement("div")
      square.classList.add("square")
      square.classList.add("empty")
      row.append(square)
    }
  }
  
  markBoard()
  
  isPlayerXTurn = true
  function makeMove() {
    let ticTakToe = document.querySelector(".tic-tac-toe")
    let squares = ticTakToe.querySelectorAll(".square")
    console.log(squares)
    for (let square of squares) {
      square.addEventListener("click", (event) => {
        if (!event.target.textContent) {
          if (isPlayerXTurn) {
            event.target.textContent = "x"
            isPlayerXTurn = false
          } 
          else {
            event.target.textContent = "o"
            isPlayerXTurn = true
          }
  
        }
       
      })
    }
  }
  
  
  
  makeMove()
  
  buttion = document.querySelector("button")
  button.addEventListener("click", (e) =>   {
    ticTakToe = document.querySelector(".tic-tac-toe")
    ticTakToe.textContent = ""
    markBoard()
  })