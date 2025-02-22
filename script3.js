function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const textElements = document.querySelectorAll("header");
  textElements.forEach((el) => {
    el.classList.toggle("dark-mode");
  });
}

const button = document.getElementById("rotateButton");

button.addEventListener("click", () => {
  button.classList.toggle("rotated");
});
