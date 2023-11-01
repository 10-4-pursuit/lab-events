const palette = document.getElementById("palette");
const currentColor = document.getElementById("current-color");
const canvas = document.getElementById("canvas");

function createCells() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => {
    const color = currentColor.style.backgroundColor;
    cell.style.backgroundColor = color;
  });
  return cell;
}

for (let i = 0; i < 100; i++) {
  const cell = createCells();
  canvas.appendChild(cell);
}

palette.addEventListener("click", (event) => {
  event.target.classList.contains("color");
  const color = event.target.style.backgroundColor;
  currentColor.style.backgroundColor = color;
});
