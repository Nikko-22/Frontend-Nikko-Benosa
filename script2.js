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
      })
      .catch(() => {
        responseMessage.style.display = "block";
        responseMessage.textContent = "Network error. Please try again.";
        responseMessage.style.color = "red";
      });
  });
});

AOS.init({
  duration: 1000,
  once: false,

  disable: function () {
    return window.innerWidth < 768; // Disables AOS animations for screens narrower than 768px
  },
});

