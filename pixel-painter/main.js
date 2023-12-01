function colorSelector() {
    colorPalette = document.querySelectorAll(".color") 
    currentColor = document.querySelector("#current-color")
    for(let color of colorPalette) {
        color.addEventListener("click", () => {currentColor.style.background = color.style.background
            // console.log(currentColor.style)
            // console.log(color.style.background)

        })
        
    }
}
colorSelector()

function createCell() {
    for(i = 0; i< 100; i++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")
        canvas.append(cell)
    }
}
createCell()

function changeCellColor() {
    let canvas = document.querySelector("#canvas") 
    canvas.querySelectorAll(".cell") 
    for (const cell of canvas.children){
        console.log(cell)
        cell.addEventListener("click", () => {
            let currentColor = document.querySelector("#current-color")
            cell.style.background = currentColor.style.background
        })
    }
}
changeCellColor()