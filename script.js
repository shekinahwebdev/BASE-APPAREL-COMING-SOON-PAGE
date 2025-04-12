document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.querySelector(".subscription-form");
  const userEmailInput = document.querySelector("#email");
  const errorIcon = document.querySelector(".error-icon-content");
  const errorMsg = document.querySelector(".error-message");

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userEmail = userEmailInput.value.trim();

    if (pattern.test(userEmail)) {
      errorMsg.style.display = "none";
      errorIcon.style.display = "none";
      emailForm.style.border = "0.5px solid hsl(0, 36%, 70%)";
      emailForm.reset();
    } else {
      errorMsg.style.display = "flex";
      errorMsg.textContent = "Please provide a valid email!";
      errorIcon.style.display = "block";
      emailForm.style.border = "2px solid hsl(0, 93%, 68%)";

      emailForm.classList.add("shake");
      setTimeout(() => {
        emailForm.classList.remove("shake");
      }, 300);
    }
  });
});
