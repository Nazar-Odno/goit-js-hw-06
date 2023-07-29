// Зберігаємо посилання на елементи, з якими будемо взаємодіяти
const counterValueElement = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

// Ініціалізуємо початкове значення лічильника
let counterValue = 0;

// Функція оновлення значення лічильника в інтерфейсі
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

// Слухач для кнопки зменшення значення
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

// Слухач для кнопки збільшення значення
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

// Викликаємо функцію оновлення на початку, щоб відобразити початкове значення
updateCounterValue();