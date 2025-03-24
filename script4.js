function toggleAnswer(container) {
  const answer = container.nextElementSibling;
  const button = container.querySelector(".button");
  const allAnswers = document.querySelectorAll(".answer");
  const allButtons = document.querySelectorAll(".button");

  // Close all other answers
  allAnswers.forEach((ans) => {
    if (ans !== answer) {
      ans.classList.remove("show");
      ans.style.height = "0";
    }
  });

  // Reset all other buttons
  allButtons.forEach((btn) => {
    if (btn !== button) {
      btn.textContent = "+";
    }
  });

  // Toggle the current answer
  if (answer.classList.contains("show")) {
    answer.classList.remove("show");
    answer.style.height = "0";
    button.textContent = "+";
  } else {
    answer.classList.add("show");
    answer.style.height = answer.scrollHeight + "px";
    button.textContent = "-";
  }
}
