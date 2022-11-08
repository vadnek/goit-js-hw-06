// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и 
// выводит значение цвета в span.color.
const btnOn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color');

const onChangeColorBody = () => {
 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
const color = getRandomHexColor();

bodyEl.style.backgroundColor = color;
spanColor.textContent = color;
}

btnOn.addEventListener('click', onChangeColorBody);





