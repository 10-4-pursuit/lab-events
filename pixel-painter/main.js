function createCanvas() {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => {
      const addColor = document.querySelector("#current-color");
      cell.style.background = addColor.style.background;
    });
    const grid = document.querySelector("#canvas");
    grid.appendChild(cell);
  }
}

function changingColors() {
  const colors = document.querySelectorAll("#palette .color");
  for (const color of colors) {
    color.addEventListener("click", () => {
      const addColor = document.querySelector("#current-color");
      addColor.style.background = color.style.background;
    });
  }
}

createCanvas();
changingColors();