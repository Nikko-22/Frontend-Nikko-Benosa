// Select filter buttons and main-box elements
const filterButtons = document.querySelectorAll("#filters button");
const mainBoxes = document.querySelectorAll(".main-box");

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the 'gold' background from all buttons
    filterButtons.forEach((btn) => {
      btn.style.backgroundColor = ""; // Reset background
      btn.style.color = "";
      btn.style.transform = "";
    });

    // Add 'gold' background to the clicked button
    button.style.backgroundColor = "#e5bb30";
    button.style.transform = "translateY(-8px)";
    button.style.color = "black";

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

// Function to create a smooth slide-in animation
function slideIn(element) {
  element.style.opacity = 0; // Start hidden
  element.style.transform = "translateX(-50px)"; // Start off-screen
  element.style.display = "block"; // Ensure element is visible

  // Use CSS transitions for smoother animation
  element.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  setTimeout(() => {
    element.style.opacity = 1; // Fade in
    element.style.transform = "translateX(0)"; // Slide to position
  }, 50); // Small delay to trigger the transition
}

// Optimize for smaller screens
function optimizeForSmallScreens() {
  if (window.innerWidth <= 768) {
    // Define 'small screen' breakpoint
    mainBoxes.forEach((box) => {
      box.style.transition = "opacity 0.7s ease, transform 0.7s ease"; // Slightly slower for smoother effect
    });
  }
}

// Call optimization function on load and resize
window.addEventListener("resize", optimizeForSmallScreens);
optimizeForSmallScreens();
