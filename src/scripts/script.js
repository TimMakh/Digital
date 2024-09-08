const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalForm = document.querySelector(".modal__form");
const mailInput = document.querySelector(".input__mail");
const formSubmit = document.querySelector(".modal__btn");
const nameInputText = document.querySelector(".input__name");
const textAreaText = document.querySelector(".modal__form--textarea");
const burgerBtn = document.querySelector(".header__burger");
const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal__wrapper");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");

function openModal() {
  modal.style.display = "flex";
}

modal.addEventListener("click", function (e) {
  if (!modalWrapper.contains(e.target)) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  modalForm.reset();
  mailInput.style.borderColor = "";
}

async function sendForm(e) {
  e.preventDefault();
  if (!isEmailValid(mailInput.value)) {
    return;
  }

  openPopup();

  const myForm = new FormData(modalForm);
  await fetch("http://localhost:3000", { method: "POST", body: myForm });
  closeModal();
}

function openPopup() {
  popup.style.display = "flex";
}

popup.addEventListener("click", function (e) {
  if (!popupWrapper.contains(e.target)) {
    closePopup();
  }
});

function closePopup() {
  popup.style.display = "none";
}

function defaultForm(e) {
  e.preventDefault();
}

function onInput() {
  if (isEmailValid(mailInput.value)) {
    mailInput.style.borderColor = "green";
  } else {
    mailInput.style.borderColor = "red";
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

burgerBtn.addEventListener("click", openModal);
mailInput.addEventListener("input", onInput);
modalForm.addEventListener("submit", sendForm);
