
// Slider component - certificates
const certificatesSwiper = new Swiper(".certificates__swiper", {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: "#certificates__arrow--right",
    prevEl: "#certificates__arrow--left",
  },
});

// Slider component - partners
const partnersSwiper = new Swiper(".partners__swiper", {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Slider component - rewiews
const reviewsSwiper = new Swiper(".reviews__swiper", {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: "#reviews__arrow--right",
    prevEl: "#reviews__arrow--left",
  },
});