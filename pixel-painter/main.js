const paletteElement = document.querySelector("#palette");

// Add a click event listener to the `#palette` element.
paletteElement.addEventListener("click", function (event) {
  // Get the target element of the event.
  const targetElement = event.target;

  // Check if the target element is a `.color` element.
  if (targetElement.classList.contains("color")) {
    // Get the background color of the target element.
    const backgroundColor = targetElement.style.backgroundColor;

    // Set the background color of the `#current-color` element to the background color of the target element.
    document.querySelector("#current-color").style.backgroundColor =
      backgroundColor;
  }
});


/**
 This section below creates a loop that would create 100 cells to the canvas
 
  */

// Get the canvas element.
const canvasElement = document.querySelector('#canvas');

// Create a document fragment to store the cells.
const documentFragment = document.createDocumentFragment();

// Create 100 cells and append them to the document fragment.
for (let i = 0; i < 100; i++) {
  const cellElement = document.createElement('div');
  cellElement.classList.add('cell');
  documentFragment.appendChild(cellElement);
}

// Append the document fragment to the canvas element.
canvasElement.appendChild(documentFragment);




// Add a click event listener to the `#canvas` element.
document.querySelector("#canvas").addEventListener("click", function (event) {
  try {
    const targetElement = event.target;

  if (targetElement.classList.contains("cell")) {
    const backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;

    targetElement.style.backgroundColor = backgroundColor;
  }
} catch (error){
    console.log(error)
}
});



