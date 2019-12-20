'use strict';

let popup = document.querySelector('.container__form-feedback');
let buttonPopup = document.querySelector('.feedback__button')

buttonPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('container__form-feedback--active');
})
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27){
		evt.preventDefault;
		if (popup.classList.contains("container__form-feedback--active")) {
			popup.classList.remove("container__form-feedback--active");
		}
	}
})
