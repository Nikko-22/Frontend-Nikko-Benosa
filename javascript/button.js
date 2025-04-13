document.addEventListener("DOMContentLoaded", () => {
  const text_span = document.getElementById("text_span");
  const button_arrow = document.getElementById("arrow_btn");

  let isBack = true;

  button_arrow.addEventListener("click", () => {
    // First, fade out the current text
    text_span.classList.add("fade-out");

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      // Update the text after fading out
      if (isBack) {
        text_span.textContent = "Aspiring Web Designer.";
        isBack = false;
      } else {
        text_span.textContent = "Front End Developer.";
        isBack = true;
      }

      // Fade in the new text
      text_span.classList.remove("fade-out");
      text_span.classList.add("fade-in");

      // Remove the fade-in class after the animation to prepare for the next click
      setTimeout(() => {
        text_span.classList.remove("fade-in");
      }, 500);
    }, 500);
  });
});
