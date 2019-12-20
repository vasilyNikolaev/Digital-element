'use strict';

let input = document.querySelectorAll(".form-feedback__input");
let name = document.querySelector(".form-feedback__input-name");
let email = document.querySelector(".form-feedback__input-email");
let message = document.querySelector(".form-feedback__textarea");

let form = document.querySelector(".form-feedback");
let errorElement = document.querySelector(".error");

form.addEventListener("submit", function (evt){
  evt.preventDefault();
  let messages = [];

  let showError = function (type, text) {
    if (type.value === "" || type.value == null) {
      messages.push(text + " ");
      type.classList.add("form-feedback__input--invalid");
    } else {
      type.classList.remove("form-feedback__input--invalid");
    }
  }
  showError(name, "Введите имя! ");
  showError(email, "Введите email! ");
  showError(message, "Введите сообщение! ");

  if (messages.length > 0) {
    errorElement.innerText = messages.join(" ")
  } else {
    window.loadData();
  }
})
