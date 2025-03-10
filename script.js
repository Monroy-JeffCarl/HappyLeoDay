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
      clickCount++;
      counter.textContent = `Clicks: ${clickCount} / ${totalClicks}`;

      if (clickCount === totalClicks) {
        congratsMessage.classList.remove("hidden");
        loader.classList.remove("hidden");

        setTimeout(() => {
          window.location.href = "main-page.html";
        }, 2000);
      }
    });
  }
});
