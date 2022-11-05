"use strict";

/////////////////////////////////////////////
// Telephone mask
const input = document.querySelector("#phone");
const input2 = document.querySelector("#phone-2");
const input3 = document.querySelector("#phone-3");

const prefix = (e) => {
  e.target.value = "+7(";
};

input.addEventListener("focus", prefix);
input2.addEventListener("focus", prefix);
input3.addEventListener("focus", prefix);

const phoneMask = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result = "+7(";

  //
  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  e.target.value = result;
  console.log(result);
};

input.addEventListener("input", phoneMask);
input2.addEventListener("input", phoneMask);
input3.addEventListener("input", phoneMask);

/////////////////////////////////////////////
// Calculation price

const range = document.querySelector(".form__range");
const volume = document.querySelector("#volume");
const sum = document.querySelector(".total__sum");
const liter = document.querySelector(".total__liter");
const benefit = document.querySelector(".total__benefit");
const select = document.querySelector(".form__select");
const rangeThumb = (volume.value = `${range.value} литров`);

const changeSum = () => {
  sum.textContent = `${(
    parseFloat(liter.textContent) * parseFloat(volume.value)
  ).toFixed(2)} ₽`;
  benefit.textContent = `${(
    49.59 * parseFloat(volume.value) -
    parseFloat(sum.textContent)
  ).toFixed(2)} ₽`;
};

changeSum();

const changeSelect = () => {
  if (select.value === "ДТ") liter.textContent = "45.50 ₽";
  if (select.value === "АИ-95") liter.textContent = "42.34 ₽";

  changeSum();
};

const changeRange = () => {
  volume.value = `${range.value} литров`;
  range.style.backgroundImage = `-webkit-linear-gradient(left, #098FCF 0%, #098FCF ${
    range.value / 100
  }%, #D4D4D4 ${range.value / 100}%, #D4D4D4 100%)`;

  changeSum();
};

range.addEventListener("input", changeRange);

select.addEventListener("change", changeSelect);

/////////////////////////////////////////////

// Slider component - certificates
const availableScreenWidth = window.screen.availWidth;

const sliderCertificates = () => {
  const slides = document.querySelectorAll(".certificates__img");
  const btnLeft = document.querySelector("#certificates__arrow--left");
  const btnRight = document.querySelector("#certificates__arrow--right");
  const container = document.querySelector(".certificates__images");

  let slidesToShow = 4;
  window.document.addEventListener('resize', () => {

  })
  
  if(availableScreenWidth < 960 && availableScreenWidth > 768) {
    slidesToShow = 3
  } else if (availableScreenWidth <= 768) {
    slidesToShow = 2;
  }

  const gap = (55 / container.offsetWidth) * 100;

  const itemWidth =
    ((100 - (slidesToShow - 1) * gap) / (slidesToShow * 100)) * 100;

  slides.forEach((slide) => {
    slide.style.width = `${itemWidth}%`;
    slide.style.margin = `0 0 0 ${gap / 2}%`;
  });

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) =>
        (s.style.transform = `translateX(${100 * (i - slide)}%) translateX(${
          4 * (i - slide)
        }rem)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 4) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  btnRight.addEventListener("click", nextSlide);

  // Previuos slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 4;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  };

  btnLeft.addEventListener("click", prevSlide);

  const init = function () {
    goToSlide(0);
  };
  init();
};
sliderCertificates();

// Slider component - partners
const sliderPartners = () => {
  const dotContainer = document.querySelector(".dots");
  const container = document.querySelector(".partners__slider");
  const slides = document.querySelectorAll(".partners__logo");
  let slidesToShow = 4;
  let gap = (115 / container.offsetWidth) * 100;

  if(availableScreenWidth < 960 && availableScreenWidth > 768) {
    slidesToShow = 3
  } else if (availableScreenWidth <= 768) {
    slidesToShow = 2;
    gap = (70 / container.offsetWidth) * 100;
  }


  const itemWidth =
    ((100 - (slidesToShow - 1) * gap) / (slidesToShow * 100)) * 100;

  const countOfDots = Math.ceil(slides.length / slidesToShow);

  slides.forEach((slide) => {
    slide.style.width = `${itemWidth}%`;
    slide.style.margin = `0 ${gap}% 0 0`;
  });

  for (let i = 0; i < countOfDots; i++) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  }

  const activateDot = (slide) => {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  }

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      container.style.transform = `translateX(-${
        (100 + gap) * e.target.dataset.slide
      }%)`;
      const { slide } = e.target.dataset;

      activateDot(slide)
    }
  });
};
sliderPartners();

// Slider component - rewiews

const sliderReviews = () => {
  const slides = document.querySelectorAll(".review");
  const btnLeft = document.querySelector("#reviews__arrow--left");
  const btnRight = document.querySelector("#reviews__arrow--right");
  const container = document.querySelector('.reviews__container')
  let slidesToShow = 2;

  const gap = (4 / container.offsetWidth) * 100;

  if (availableScreenWidth <=544) {
    slidesToShow = 1;
  }

  const itemWidth =
    ((100 - (slidesToShow - 1) * gap) / (slidesToShow * 100)) * 100;
    console.log(itemWidth);

  slides.forEach((slide) => {
    slide.style.width = `${itemWidth}%`;
    slide.style.margin = `0 ${gap}% 0 0`;
  });

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) =>
        (s.style.transform = `translateX(${100 * (i - slide)}%) translateX(${
          4 * (i - slide)
        }rem)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 2) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  btnRight.addEventListener("click", nextSlide);

  // Previuos slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 2;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  };

  btnLeft.addEventListener("click", prevSlide);

  const init = function () {
    goToSlide(0);
  };
  init();
};
sliderReviews();

// Burger menu
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});