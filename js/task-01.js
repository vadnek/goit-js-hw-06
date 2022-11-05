const arrayItem = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${arrayItem.length}`);
// Текст h2 та кільіксть елементів
arrayItem.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
   console.log(`Elements: ${element.querySelectorAll("li").length}`);
});