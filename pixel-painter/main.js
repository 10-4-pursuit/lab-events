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

// Add a click event listener to the `#canvas` element.
document.querySelector("#canvas").addEventListener("click", function (event) {
  try {
    const targetElement = event.target;

  if (targetElement.classList.contains("#canvas")) {
    const backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;

    targetElement.style.backgroundColor = backgroundColor;
  }
} catch (error){
    console.log(error)
}
});

// const cellElement = document.querySelector("#canvas");
// cellElement.addEventListener("click", function (component) {
//   const targetComponent = component.target;

//   if (targetComponent.classList.contains("cell")) {
//     const bgColor =
//       document.querySelector("#current-color").style.backgroundColor;

//     targetComponent.style.backgroundColor = bgColor;
//   }

//   document.querySelector("#canvas").addEventListener("click", function (event) {
//     try {
//     const targetElement = event.target;

//     if (targetElement.classList.contains('cell')) {
//       const backgroundColor =
//         document.querySelector("#current-color").style.backgroundColor;

//       targetElement.style.backgroundColor = backgroundColor;
//     }
// } catch (error) {
//     console.log(error)
// }
//   });
// });
