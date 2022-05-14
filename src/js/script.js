"use strict";

const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const loginId = document.querySelector("#loginId");
const loginPw = document.querySelector("#loginPw");
const loginBtn = document.querySelector("#loginBtn");
const signUpLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

loginId.addEventListener("input", () => {
  activeLoginButton();
});

loginPw.addEventListener("input", () => {
  activeLoginButton();
});

signUpLink.addEventListener("click", () => {
  container.classList.add("active");
});

loginLink.addEventListener("click", () => {
  container.classList.remove("active");
});

function activeLoginButton() {
  if (loginId.value === "" || loginPw.value.length < 4) {
    loginBtn.classList.add("disabled");
  } else {
    loginBtn.classList.remove("disabled");
  }
}
