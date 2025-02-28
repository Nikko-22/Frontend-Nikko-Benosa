const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  let index = 0;
  const slides = slider.querySelectorAll("img");

  let startX, endX;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if (startX > endX) {
      // Swipe left
      slides[index].classList.add("hidden");
      index = (index + 1) % slides.length;
      slides[index].classList.remove("hidden");
    } else if (startX < endX) {
      // Swipe right
      slides[index].classList.add("hidden");
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.remove("hidden");
    }
  });
});
