// Select filter buttons and main-box elements
const filterButtons = document.querySelectorAll("#filters button");
const mainBoxes = document.querySelectorAll(".main-box");

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Loop through each main-box
    mainBoxes.forEach((box) => {
      if (filter === "all") {
        box.style.display = "block"; // Show all
      } else {
        const type = box.getAttribute("data-type"); // Get the type of each box
        box.style.display = type === filter ? "block" : "none"; // Match type with filter
      }
    });
  });
});

// Function to create a slide-in animation
function slideIn(element) {
  element.style.opacity = 0; // Start hidden
  element.style.transform = "translateX(-50px)"; // Start off-screen
  element.style.display = "block"; // Ensure element is visible
  let opacity = 0;
  let position = -50; // Starting position

  const interval = setInterval(() => {
    opacity += 0.1; // Increase opacity
    position += 5; // Move position closer to 0
    element.style.opacity = opacity;
    element.style.transform = `translateX(${position}px)`;
    if (opacity >= 1 && position >= 0) {
      clearInterval(interval); // Stop when fully visible and in position
    }
  }, 50); // Adjust animation speed
}

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    mainBoxes.forEach((box) => {
      const type = box.getAttribute("data-type");
      if (filter === "all" || filter === type) {
        slideIn(box); // Call slide-in animation
      } else {
        box.style.display = "none"; // Hide unmatched elements
      }
    });
  });
});
