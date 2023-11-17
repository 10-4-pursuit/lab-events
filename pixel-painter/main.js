function createCells() {
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("click", () => {
            const newColor = document.querySelector("#current-color");
            cell.style.background = newColor.style.background;
        });
        const grid = document.querySelector("#canvas")
        grid.appendChild(cell);
    }
}

function changingCurrentColor() {
    const colors = document.querySelectorAll("#palette .color");
    for (const color of colors) {
        color.addEventListener("click", () => {
            const newColor = document.querySelector("#current-color");
            newColor.style.background = color.style.background;
        });
    }
}

createCells();
changingCurrentColor();