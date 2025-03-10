function redirectToName() {
  window.location.href = "enter-name01.html";
}

function redirectToBirthdate() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    alert("Please enter your name!");
    return;
  }

  localStorage.setItem("userName", name);

  let button = document.querySelector("button");
  button.style.transform = "scale(0.9)";
  setTimeout(() => {
    window.location.href = "enter-birthdate02.html";
  }, 300);
}

function redirectToWelcome() {
  let birthdate = document.getElementById("birthdateInput").value;

  if (birthdate.trim() === "") {
    alert("Please enter your birthdate!");
    return;
  }

  if (birthdate !== "2003-03-11") {
    alert("Incorrect birthdate! Try again.");
    return;
  }

  localStorage.setItem("userBirthdate", birthdate);

  let button = document.getElementById("proceedButton");
  button.style.transform = "scale(0.9)";
  setTimeout(() => {
    window.location.href = "main-welcome.html";
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("userName") || "Guest";
  let userNameElement = document.getElementById("userName");
  if (userNameElement) {
    userNameElement.textContent = name;
  }

  let proceedButton = document.getElementById("proceedButton");
  if (proceedButton) {
    proceedButton.addEventListener("click", redirectToWelcome);
  }

  let clickCount = 0;
  const totalClicks = 22;
  const icon = document.getElementById("clickIcon");
  const counter = document.getElementById("clickCounter");
  const congratsMessage = document.getElementById("congratsMessage");
  const loader = document.getElementById("loader");

  if (icon && counter && congratsMessage && loader) {
    icon.addEventListener("click", () => {
      if (clickCount >= totalClicks) return;

      clickCount++;
      counter.textContent = `Clicks: ${clickCount} / ${totalClicks}`;

      if (clickCount === totalClicks) {
        icon.style.pointerEvents = "none";
        icon.style.cursor = "not-allowed";
        congratsMessage.classList.remove("hidden");
        loader.classList.remove("hidden");

        setTimeout(() => {
          window.location.href = "main-page.html";
        }, 2000);
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("main-page.html")) {
    function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      document.body.appendChild(confetti);

      const size = Math.random() * 10 + 5;
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }

    function getRandomColor() {
      const colors = ["#ff6b6b", "#ffcc00", "#4ecdc4", "#ff66ff", "#3498db"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createConfetti, 200);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Only run this code if the carousel exists on the page
  const images = document.querySelectorAll(".carousel-images img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (images.length > 0 && prevBtn && nextBtn) {
    let index = 0;

    function showImage(i) {
      images.forEach((img, idx) => {
        img.classList.toggle("active", idx === i);
      });
    }

    prevBtn.addEventListener("click", function () {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    nextBtn.addEventListener("click", function () {
      index = (index + 1) % images.length;
      showImage(index);
    });

    showImage(index);
  }
});
