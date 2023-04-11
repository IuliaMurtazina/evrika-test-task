import { submitForm } from "./submittingForm";

export const popupOrder = document.querySelector("#popup-order");
const popupWrite = document.querySelector("#popup-write");
const popupLk = document.querySelector("#popup-lk");
const popupOrderCloseButton = document.querySelector("#popup-order-close");
const popupWriteCloseButton = document.querySelector("#popup-write-close");
const popupLkCloseButton = document.querySelector("#popup-lk-close");

const writeUsButtons = ["#write-us", "#write-us-2"];
const lkButtons = ["#lk", "#lk-2"];

//show popup
export const showPopup = (popup) => {
  popup.classList.remove("hidden");
  document.querySelector("html").classList.add("overflow-hidden");
};

const showPopupHandler = (buttons, popup) => {
  buttons.forEach((btn) => {
    const button = document.querySelector(`${btn}`);
    button.addEventListener("click", showPopup.bind(null, popup));
  });
};

showPopupHandler(writeUsButtons, popupWrite);
showPopupHandler(lkButtons, popupLk);

// close popup

const closePopup = (popup) => {
  popup.classList.add("hidden");
  document.querySelector("html").classList.remove("overflow-hidden");
};

const closePopupHandler = (popup, closeButton) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) closePopup.call(null, popup);
  });
  closeButton.addEventListener("click", closePopup.bind(null, popup));
};

closePopupHandler(popupOrder, popupOrderCloseButton);
closePopupHandler(popupWrite, popupWriteCloseButton);
closePopupHandler(popupLk, popupLkCloseButton);
