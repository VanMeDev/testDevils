document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", handleFormSubmit);
    }
  });
  
  function handleFormSubmit(event) {
    event.preventDefault();
    const formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = "<p class='form-sent-message'>Форма відправлена! Дякуємо за вашу участь!</p>";
  }
  