const elementNum1 = document.querySelector("#num1");
const elementNum2 = document.querySelector("#num2");
const elementBtnSum = document.querySelector("#btn-sum");
const elementBtnResta = document.querySelector("#btn-resta");
const elementBtnMultipler = document.querySelector("#btn-multiplier");
const elementBtnDivision = document.querySelector("#btn-division");
const elementBtnModule = document.querySelector("#btn-module");
const elementBtnReset = document.querySelector("#btn-reset");
const elementResult = document.querySelector("#result-operation");

elementBtnReset.addEventListener("click", () => {
  elementNum1.value = "";
  elementNum2.value = "";
  elementResult.innerHTML = "-";
});

elementBtnSum.addEventListener("click", () => {
  const num1 = elementNum1.value;
  const num2 = elementNum2.value;

  if (!num1 || !num2) {
    return alert(`Por favor, ingrese los numeros`);
  }

  const result = +num1 + +num2;
  elementResult.innerHTML = result;
});

elementBtnResta.addEventListener("click", () => {
  const num1 = elementNum1.value;
  const num2 = elementNum2.value;

  if (!num1 || !num2) {
    return alert(`Por favor, ingrese los numeros`);
  }

  const result = +num1 - +num2;
  elementResult.innerHTML = result;
});

elementBtnMultipler.addEventListener("click", () => {
  const num1 = elementNum1.value;
  const num2 = elementNum2.value;

  if (!num1 || !num2) {
    return alert(`Por favor, ingrese los numeros`);
  }

  const result = +num1 * +num2;
  elementResult.innerHTML = result;
});

elementBtnDivision.addEventListener("click", () => {
  const num1 = elementNum1.value;
  const num2 = elementNum2.value;

  if (!num1 || !num2) {
    return alert(`Por favor, ingrese los numeros`);
  }

  const result = +num1 / +num2;
  elementResult.innerHTML = result;
});

elementBtnModule.addEventListener("click", () => {
  const num1 = elementNum1.value;
  const num2 = elementNum2.value;

  if (!num1 || !num2) {
    return alert(`Por favor, ingrese los numeros`);
  }

  const result = +num1 % +num2;
  elementResult.innerHTML = result;
});
