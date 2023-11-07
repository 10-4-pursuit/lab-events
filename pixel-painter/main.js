const pointerColor = document.querySelectorAll(".color")

document.querySelector("#current-color")
// change the event listener to mousedown instead of click to fill a color in the cell?
for (let colorElement of pointerColor) {
    colorElement.addEventListener("click", () => {
        const currentColor = document.querySelector("#current-color")
        console.log(colorElement.style.background)
        currentColor.style.background = colorElement.style.background
    });
}
// here we named our variable, which points to where in the html we are addressing.
const canvas = document.querySelector("#canvas");

for (let i = 0; i < 100; i++) {
    const cellsInElement = document.createElement("div");
    cellsInElement.classList.add("cell");
    canvas.appendChild(cellsInElement);
}

let mouseUpOrDown = false;

for (let cell of canvas.children) {
    cell.addEventListener("mouseover", () => {
        const colorOfChoice = document.querySelector("#current-color");
        if (mouseUpOrDown) {
            cell.style.background = colorOfChoice.style.background
        }
    });
    cell.addEventListener("mousedown", () => {
        mouseUpOrDown = true;
    });

    cell.addEventListener("mouseup", () => {
        mouseUpOrDown = false;
    });
}

const resetButton = document.querySelector("#reset-button")

resetButton.addEventListener("click", () => {
    let resetAllToWhite = canvas.children
    for (let cell of resetAllToWhite) {
        cell.style.background = "white"
    }
});

const changeAllCellsColor = document.querySelector("#change-all-button")

changeAllCellsColor.addEventListener("click", () => {
    let entireCellColor = canvas.children
    for (let cell of entireCellColor) {
        const currentColor = document.querySelector("#current-color");
        cell.style.background = currentColor.style.background;
    }
});