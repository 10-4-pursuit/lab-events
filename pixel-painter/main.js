const allColors = document.querySelectorAll(".color")
const currentColor = document.querySelector("#current-color")
for(let color of allColors ) {
    color.addEventListener("click", () =>{
        currentColor.style.backgroundColor=color.style.backgroundColor
    })
}
const canvas = document.querySelector("#canvas")
for(let i=0; i<100; i++) {
 const cell = document.createElement("div") 
 cell.className = "cell"
 cell.addEventListener("click", ()=>{
    cell.style.backgroundColor=currentColor.style.backgroundColor
 })
 canvas.appendChild(cell)
}
