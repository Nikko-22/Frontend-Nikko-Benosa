document.addEventListener("DOMContentLoaded", () => {
  const rotateButton = document.getElementById("rotateButton");
  const darkModeToggleIcon = document.getElementById("circle");

  // Function to toggle dark mode and rotate icon
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const elements = document.querySelectorAll("#loader, .word");
    elements.forEach((el) => el.classList.toggle("dark-mode"));

    // Rotate icon
    if (rotateButton) {
      rotateButton.classList.toggle("rotated");
    }

    // Save preference
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
  }

  // Load dark mode from localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    const elements = document.querySelectorAll("#loader, .word");
    elements.forEach((el) => el.classList.add("dark-mode"));
    if (rotateButton) rotateButton.classList.add("rotated");
  }

  // Attach toggle function
  if (rotateButton) {
    rotateButton.addEventListener("click", toggleDarkMode);
  }

  // Hide loader after 2 seconds
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 2000);
});
