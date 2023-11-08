// click on the color palette
const paletteElements = document.querySelectorAll(".color")
const currentColor = document.querySelector("#current-color")

for (let paletteElement of paletteElements) {
    paletteElement.addEventListener("click", () => {
    currentColor.style.backgroundColor = paletteElement.style.backgroundColor
    });
    }

    const grid = document.querySelector("#canvas")
    const documentfragment = document.createDocumentFragment()


for (i = 0; i < 100; i++) {
const newDiv = document.createElement("div")
newDiv.classList.add("cell")
documentfragment.appendChild(newDiv)
}

grid.appendChild(documentfragment)






    
// this is what we want to affect

// // current-color change
// const changeColorButton = document.querySelector("#current-color")
// changeColorButton.addEventListener("click", () => {
//     changeColorButton.style.backgroundColor = "red"
// });

// // const currentColorBlack = document.querySelector("color.background.black")
// // currentColorBlack.addEventListener("click", () => {
// //     changeColorButton.style.backgroundColor = "red"
    
// // });


// const paletteSection = document.getElementById('palette');
// const colorElement = paletteSection.querySelectorAll('.color')
// for (let color of colorElement) {
// if (color.style.backgroundColor === 'yellow') {
//     color.style.backgroundColor = 'Gray';
//   }}