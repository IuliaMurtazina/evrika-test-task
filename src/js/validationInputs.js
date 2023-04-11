
const inputs = [
  "delivery-name",
  "delivery-phone",
  "order-place",
  "order-name",
  "order-phone",
  "name-callback",
  "phone-callback",
];

const actions = ["focus", "input"];

inputs.forEach((el) => {
  const input = document.querySelector(`#${el}`);

  actions.forEach((action) => {
    input.addEventListener(action, () => {
      if (input.value.trim() === "") {
        input.style.borderBottom = "3px solid red";
      } else {
        input.style.borderBottom = "3px solid #098FCF";
      }
    });
  });
});