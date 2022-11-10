const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl= document.querySelector("#ingredients");

const madeLiEl = (ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  return liElement;
};
const elements = ingredients.map(madeLiEl);
ingredientsEl.append(...elements);
