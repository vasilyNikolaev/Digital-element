'use strict';

(function () {

window.loadData = function () {
  let formData = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  let popupSuccessful = document.querySelector(".successfulSending");

  let successfulSending = function () {
    popupSuccessful.classList.remove("successfulSending--active")
  }

  let request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    popup.classList.remove("container__form-feedback--active");
    popupSuccessful.classList.add("successfulSending--active");
    setTimeout(successfulSending, 1500);
  })

  request.open("POST", "index.html", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
  request.send(" name= " + formData.name + " email= " + formData.email + " message= " + formData.message);
}
})();
