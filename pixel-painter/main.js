const paletteElement = document.querySelector('#palette')

// Add a click event listener to the `#palette` element.
paletteElement.addEventListener('click', function(event) {
    // Get the target element of the event.
    const targetElement = event.target;

      // Check if the target element is a `.color` element.
  if (targetElement.classList.contains('color')) {
    // Get the background color of the target element.
    const backgroundColor = targetElement.style.backgroundColor;

        // Set the background color of the `#current-color` element to the background color of the target element.
        document.querySelector('#current-color').style.backgroundColor = backgroundColor;
    }
  });