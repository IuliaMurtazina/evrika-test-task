import { showPopup, popupOrder } from "./popups";

const deliveryForm = document.querySelector("#delivery-form");
const orderForm = document.querySelector("#order-form");
const formCallback = document.querySelector("#form-callback");

export const submitForm = (name, phone, checkbox, place, popup) => {
  const inputName = document.querySelector(`#${name}`);
  const inputPhone = document.querySelector(`#${phone}`);
  const inputCheckbox = document.querySelector(`#${checkbox}`);
  const inputPlace = document.querySelector(`#${place}`);
  const checkboxContainer = document.querySelector(".form__checkbox");

  if (place) {
    if (!inputPlace.value || inputPlace.value.trim() === "") {
      inputPlace.style.borderBottom = "3px solid red";
      return false;
    } else {
      inputPlace.style.borderBottom = "none";
    }
  }

  if (!inputName.value || inputName.value.trim === "") {
    inputName.style.borderBottom = "3px solid red";
    return false;
  } else {
    inputName.style.borderBottom = "none";
  }

  if (!inputPhone.value || inputPhone.value.length < 17) {
    inputPhone.style.borderBottom = "3px solid red";
    return false;
  } else {
    inputPhone.style.borderBottom = "none";
  }

  if (checkbox) {
    if (!inputCheckbox.checked) {
      checkboxContainer.style.border = "1px solid red";
      return false;
    } else {
      checkboxContainer.style.border = "1px solid #D4D4D4";
    }
  }

  showPopup(popup);
  inputName.value = "";
  inputPhone.value = "";

  if (checkbox) inputCheckbox.checked = false;
  if (place) inputPlace.value = "";
  return true;
};

deliveryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm.call(
    null,
    "delivery-name",
    "delivery-phone",
    "checkbox",
    null,
    popupOrder
  );
});

formCallback.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm.call(
    null,
    "name-callback",
    "phone-callback",
    null,
    null,
    popupOrder
  );
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm.call(
    null,
    "order-name",
    "order-phone",
    null,
    "order-place",
    popupOrder
  );
});
