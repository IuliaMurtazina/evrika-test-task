import { submitForm } from "./submittingForm";

export const popupOrder = document.querySelector("#popup-order");
const popupWrite = document.querySelector("#popup-write");
const popupLk = document.querySelector("#popup-lk");
const popupOrderCloseButton = document.querySelector("#popup-order-close");
const popupWriteCloseButton = document.querySelector("#popup-write-close");
const popupLkCloseButton = document.querySelector("#popup-lk-close");
const writeUs = document.querySelector("#write-us");
const lk = document.querySelector("#lk");

//show popup
export const showPopup = (popup) => {
  popup.classList.remove("hidden");
  document.querySelector("html").classList.add("overflow-hidden");
};

writeUs.addEventListener("click", showPopup.bind(null, popupWrite));
lk.addEventListener("click", showPopup.bind(null, popupLk));

const closePopup = (popup) => {
  popup.classList.add("hidden");
  document.querySelector("html").classList.remove("overflow-hidden");
};

// close popup
popupOrder.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) closePopup.call(null, popupOrder);
});
popupOrderCloseButton.addEventListener(
  "click",
  closePopup.bind(null, popupOrder)
);

popupWrite.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) closePopup.call(null, popupWrite);
});
popupWriteCloseButton.addEventListener(
  "click",
  closePopup.bind(null, popupWrite)
);

popupLk.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) closePopup.call(null, popupLk);
});
popupLkCloseButton.addEventListener("click", closePopup.bind(null, popupLk));