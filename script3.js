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

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const elements = document.querySelectorAll("#loader, .word");
  elements.forEach((el) => el.classList.toggle("dark-mode"));

  // Save dark mode preference
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  // Update button text
  document.getElementById("darkModeToggle").textContent = isDarkMode
    ? "Light Mode"
    : "Dark Mode";
}

// Ensure dark mode is applied on page load
window.addEventListener("load", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");

    const elements = document.querySelectorAll("#loader, .word");
    elements.forEach((el) => el.classList.add("dark-mode"));
  }

  // Set button text correctly
  document.getElementById("darkModeToggle").textContent = isDarkMode
    ? "Light Mode"
    : "Dark Mode";

  // Hide loader after 2 seconds
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 2000);
});

// Dark mode button
document
  .getElementById("darkModeToggle")
  .addEventListener("click", toggleDarkMode);
