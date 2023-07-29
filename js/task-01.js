// Отримуємо список категорій за допомогою id "categories"
const categoriesList = document.getElementById('categories');

// Знаходимо всі елементи li з класом "item" у списку категорій
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій у списку
console.log(`Number of categories: ${categoryItems.length}\n`);

// Ітеруємося по кожній категорії та виводимо заголовок і кількість елементів в категорії
categoryItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}\n`);
});