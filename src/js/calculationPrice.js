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