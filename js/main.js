document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", openBox);
    });
  
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", closeModal);
  });
  
  let attempts = 3;
  let results = ["lose", "win", "win", "lose", "win"];
  shuffleArray(results);
  
  function openBox(box) {
    let remainingAttempts = document.getElementById("remaining-attempts");
    let attempts = parseInt(remainingAttempts.innerText);
    if (attempts > 0) {
      remainingAttempts.innerText = attempts - 1;
      const currentResult = results.shift();
      if (currentResult === "win") {
        openModal("#winModal");
      } else {
        openModal("#loseModal");
      }
    } else {
      alert("У вас больше нет попыток.");
    }
  }
  
  function openModal(modalSelector) {
    $(modalSelector).modal("show");
  }
  
  function closeModal(modalSelector) {
    $(modalSelector).modal("hide");
  }
  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
