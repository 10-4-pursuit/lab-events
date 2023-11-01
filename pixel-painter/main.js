/**
 This section below, When a color is clicked in the `#palette`, the `#current-color` element should have its background changed to that color. 
 For example, if you click the green circle in the `#palette`, the `#current-color` element's background should change to be green.

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


/**
 This section below, when you click on a `.cell`, its background should change to match the background of `#current-color`.
 */

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

/**
 This section below creates a button that, when clicked, resets all cells so that they all have a background of white
 */

 // Create a button element.
const buttonElement = document.createElement('button');

// Set the button element's text to "Reset".
buttonElement.textContent = 'Reset';

// Add the button element to the canvas element.
canvasElement.appendChild(buttonElement);

// Add a click event listener to the button element.
buttonElement.addEventListener('click', function() {
  // Get all the cell elements.
  const cells = document.querySelectorAll('.cell');

  // Loop through all the cell elements and set their background color to white.
  for (const cell of cells) {
    cell.style.backgroundColor = 'white';
  }
});

/**
 BONUSSS--This section below is to change the event listener so that instead of clicking to fill a color, you hold down your trackpad.
 */

// Add a mousedown event listener to the canvas element.
canvasElement.addEventListener('mousedown', function(event) {
  // Get the target element of the event.
  const targetElement = event.target;

  // If the target element is a `.cell` element, start filling the cell with the current color.
  if (targetElement.classList.contains('cell')) {
    // Prevent the default behavior of the click event.
    event.preventDefault();

    // Start filling the cell with the current color.
    targetElement.style.backgroundColor = document.querySelector('#current-color').style.backgroundColor;

    // Add a mousemove event listener to the canvas element.
    canvasElement.addEventListener('mousemove', function(event) {
      // Get the current position of the mouse.
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Get the cell element at the current mouse position.
      const cellElement = document.elementFromPoint(mouseX, mouseY);

      // If the cell element is not null, fill it with the current color.
      if (cellElement !== null) {
        cellElement.style.backgroundColor = document.querySelector('#current-color').style.backgroundColor;
      }
    });

    // Add a touchend event listener to the canvas element.
    canvasElement.addEventListener('touchend', function(event) {
      // Stop filling the cell with the current color.
      targetElement.style.backgroundColor = null;
    });
  }
});
