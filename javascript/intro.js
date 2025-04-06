const intro = document.getElementById("intro");
const main = document.getElementById("main");

const hasSeenIntro = localStorage.getItem("seenIntro");

if (hasSeenIntro) {
  // Skip intro if already seen
  intro.style.display = "none";
  main.classList.add("show");
} else {
  // Play intro animation
  setTimeout(() => {
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.style.display = "none";
      main.classList.add("show");
      localStorage.setItem("seenIntro", true);
    }, 1000); // match fade duration
  }, 4000); // Wait for typing animation to finish
}
