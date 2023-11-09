const NUM_CELLS = 100;

const palette = document.getElementById("palette");
const currentColor = document.getElementById("current-color");
const canvas = document.getElementById("canvas");

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}

function populateCanvas() {
  for (let i = 0; i < NUM_CELLS; i++) {
    const cell = createCell();
    canvas.appendChild(cell);
  }
}

function handleCellClick(event) {
  const color = currentColor.style.backgroundColor;
  const cell = event.target;
  if (cell.classList.contains("cell")) {
    cell.style.backgroundColor = color;
  }
}

function handlePaletteClick(event) {
  if (event.target.classList.contains("color")) {
    const color = event.target.style.backgroundColor;
    currentColor.style.backgroundColor = color;
  }
}

canvas.addEventListener("click", handleCellClick);
palette.addEventListener("click", handlePaletteClick);

populateCanvas();
