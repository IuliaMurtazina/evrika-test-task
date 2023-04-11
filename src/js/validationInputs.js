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
      if (
        input.value.trim() === "" ||
        (input.type === "tel" && input.value.length < 17)
      ) {
        input.style.borderBottom = "3px solid red";
      } else {
        input.style.borderBottom = "3px solid #098FCF";
      }
    });
  });

  input.addEventListener("blur", () => {
    input.style.borderBottom = "1px solid #D4D4D4";
  });
});
