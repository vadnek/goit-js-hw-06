const textInput = document.querySelector("#name-input");
// console.log(textInput);
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
  });