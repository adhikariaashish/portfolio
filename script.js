'use strict';



const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }




const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


(function() {
  emailjs.init("service_viv9ivq"); 
})();






const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");






for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}


form.addEventListener("submit", function(event) {
  event.preventDefault();


  const formData = {
    sendername: form.querySelector('input[name="fullname"]').value,
    sendermail: form.querySelector('input[name="email"]').value,
    messagemail: form.querySelector('textarea[name="message"]').value
  };


  emailjs.send('service_viv9ivq', 'template_v17ebjn', formData)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      form.reset();
      formBtn.setAttribute("disabled", "");
    }, function(error) {
      console.log('FAILED...', error);
      alert("Failed to send the message. Please try again.");
    });
});
