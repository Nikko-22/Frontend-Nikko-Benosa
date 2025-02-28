let startX;
let endX;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (startX - endX > 50) {
    slider.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  } else if (endX - startX > 50) {
    slider.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  }
});
