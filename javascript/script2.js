document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("response-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from redirecting

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          responseMessage.style.display = "block";
          responseMessage.textContent = "Message sent successfully! ✓";
          responseMessage.style.color = "white";
          form.reset(); // Clear the form
        } else {
          responseMessage.style.display = "block";
          responseMessage.textContent = "Error sending message. Try again!";
          responseMessage.style.color = "red";
        }
        // Hide the response message after 3 seconds
        setTimeout(() => {
          responseMessage.style.display = "none";
        }, 3000);
      })
      .catch(() => {
        responseMessage.style.display = "block";
        responseMessage.textContent = "Network error. Please try again.";
        responseMessage.style.color = "red";
        // Hide the response message after 3 seconds
        setTimeout(() => {
          responseMessage.style.display = "none";
        }, 3000);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  // Function to set the active link
  function setActiveLink() {
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Run the function on page load
  setActiveLink();
});

AOS.init({
  duration: 1000,
  once: false,
});
