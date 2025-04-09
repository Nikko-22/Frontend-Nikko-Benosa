const intro = document.getElementById("intro");
const body = document.body;
const typingSound = document.getElementById("typingSound");

const hasSeenIntro = localStorage.getItem("seenIntro");

if (hasSeenIntro) {
  intro.style.display = "none";
} else {
  body.classList.add("noscroll"); // Disable scrolling

  setTimeout(() => {
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.style.display = "none";
      body.classList.remove("noscroll"); // Re-enable scrolling
      localStorage.setItem("seenIntro", true);
    }, 1000);
  }, 5500);
}
