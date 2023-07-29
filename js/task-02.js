const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients");

// Створення елементів <li> для кожного елемента масиву ingredients
const listItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

// Додавання всіх елементів <li> до списку ul#ingredients за одну операцію
ulIngredients.append(...listItems);
