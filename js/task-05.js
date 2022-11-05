const textInput = document.querySelector("#name-input");
console.log(textInput);
const textOutput = document.querySelector("#name-output");
// const ActInc = document.querySelector("[data-action=increment]");
// const countValue = document.querySelector('#value');

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
  });