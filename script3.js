// scripts.js
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const textElements = document.querySelectorAll("header, #loader");
  textElements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  // Save the dark mode state in localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Load the dark mode state from localStorage
window.addEventListener("load", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");

    const textElements = document.querySelectorAll("header");
    textElements.forEach((el) => {
      el.classList.add("dark-mode");
    });
  }
});

// const button = document.getElementById("rotateButton");

// if (button) {
//   button.addEventListener("click", () => {
//     button.classList.toggle("rotated");
//   });
// }

const button1 = document.getElementById("rotateButton");
const button2 = document.getElementById("button2");

// Function to add a click event listener to toggle the "rotated" class
function rButton(myElements) {
  myElements.addEventListener("click", () => {
    myElements.classList.toggle("rotated");
  });
}

// Apply the function to both buttons
rButton(button1);
rButton(button2);
