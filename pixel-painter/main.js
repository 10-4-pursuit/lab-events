const palette = document.getElementById("palette")
const currentColor= document.getElementById("current-color")

palette.addEventListener("click", (event) => {
    if (event.target.classList.contains("color")) {
        const colorSelected = event.target.style.backgroundColor
        currentColor.style.backgroundColor= colorSelected
    }

})

const canvas = document.querySelector("#canvas")
const docfragment = document.createDocumentFragment()
 for (let i=0; i<100; i++) {
    const cell = document.createElement('div')
    cell.classList.add("cell")
    docfragment.appendChild(cell)
 }

 canvas.appendChild(docfragment)



const cells= document.querySelectorAll(".cell") 
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = currentColor.style.backgroundColor
    })
})

const button = document.getElementById("resetButton")
button.addEventListener("click", () => (
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"
    })
))




