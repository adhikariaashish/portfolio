"use strict";

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

(function () {
  emailjs.init("stUpWJWfM7UQo0jdi");
})();

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("button[type='submit']");

formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "disabled");
    }
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    fullname: form.querySelector('input[name="fullname"]').value,
    email: form.querySelector('input[name="email"]').value,
    message: form.querySelector('textarea[name="message"]').value,
  };

  emailjs.send("service_viv9ivq", "template_v17ebjn", formData).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      form.reset();
      formBtn.setAttribute("disabled", "disabled");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send the message. Please try again.");
    }
  );
});
