// Elements
const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");

// Open modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Click outside content to close
window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
