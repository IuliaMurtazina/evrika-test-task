const input = document.querySelector("#delivery-phone");
const input2 = document.querySelector("#order-phone");
const input3 = document.querySelector("#phone-callback");

const prefix = (e) => {
  e.target.value = "+7(";
};

const inputs = [input, input2, input3];

const phoneMask = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result = "+7(";

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
};

inputs.forEach((input) => input.addEventListener("focus", prefix));
inputs.forEach((input) => input.addEventListener("input", phoneMask));