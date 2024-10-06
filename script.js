document.getElementById("trialForm").addEventListener("submit", function(event) {
  event.preventDefault();

  clearPreviousErrors();

  let isValid = true;

  const fname = document.getElementById("fname").value.trim();
  if (fname === "") {
    document.getElementById("fnameError").style.display = "block";
    document.querySelector("#fname + .error-icon").style.display = "block";
    document.getElementById("fname").closest("div").classList.add("error");
    isValid = false;
  }

  const lname = document.getElementById("lname").value.trim();
  if (lname === "") {
    document.getElementById("lnameError").style.display = "block";
    document.querySelector("#lname + .error-icon").style.display = "block";
    document.getElementById("lname").closest("div").classList.add("error");
    isValid = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
    document.getElementById("emailError").style.display = "block";
    document.querySelector("#email + .error-icon").style.display = "block";
    document.getElementById("email").closest("div").classList.add("error");
    isValid = false;
  }

  const password = document.getElementById("pass").value.trim();
  if (password === "") {
    document.getElementById("passError").style.display = "block";
    document.querySelector("#pass + .error-icon").style.display = "block";
    document.getElementById("pass").closest("div").classList.add("error");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});

function clearPreviousErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  const errorIcons = document.querySelectorAll(".error-icon");
  const inputContainers = document.querySelectorAll(".input-container");

  errorMessages.forEach(msg => msg.style.display = "none");
  errorIcons.forEach(icon => icon.style.display = "none");
  inputContainers.forEach(container => container.classList.remove("error"));
}
