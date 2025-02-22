function toggleAnswer(container) {
  const answer = container.nextElementSibling;
  const button = container.querySelector(".button");
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
