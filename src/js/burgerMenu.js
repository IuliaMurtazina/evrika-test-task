const burgerMenuOpenButton = document.querySelector(".burger-menu");
const burgerMenuCloseButton = document.querySelector(".nav-mobile__close");
const navigationMobile = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav-mobile__link");

const burgerMenuOpenHandler = () => {
  navigationMobile.classList.remove("hidden");
  document.querySelector("html").classList.add("overflow-hidden");
};

const burgerMenuCloseHandler = () => {
  navigationMobile.classList.add("hidden");
  document.querySelector("html").classList.remove("overflow-hidden");
};

navLinks.forEach((link) =>
  link.addEventListener("click", burgerMenuCloseHandler)
);

burgerMenuOpenButton.addEventListener("click", burgerMenuOpenHandler);
burgerMenuCloseButton.addEventListener("click", burgerMenuCloseHandler);