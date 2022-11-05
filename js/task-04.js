const ActDec = document.querySelector("[data-action=decrement]");
const ActInc = document.querySelector("[data-action=increment]");
const countValue = document.querySelector('#value');

ActDec.addEventListener("click", onActDec);
ActInc.addEventListener("click", onActInc);

let counterValue = 0;

function onActDec() {
    countValue.textContent = counterValue -= 1; 
}

function onActInc() {
    countValue.textContent = counterValue += 1; 
}