let palette = document.querySelectorAll(".color");
let currentColor = document.querySelector("#current-color");
let main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("cell")
    main.append(div)

for(let e of palette) {
    e.addEventListener("click", changeColor)
}
}
function changeColor(event) {
    currentColor.setAttribute("style", `background-color: ${event.target.style.backgroundColor}`)
}
let cells = document.querySelectorAll(".cell");

function cellColor(event) {
    event.target.setAttribute("style", `background-color: ${currentColor.style.backgroundColor}`);
}

cells.forEach((cell) => cell.addEventListener("mousedown", cellColor))


