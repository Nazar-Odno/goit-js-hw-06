// Отримуємо посилання на елементи
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

// Функція для зміни розміру тексту
function changeFontSize() {
    const fontSize = fontSizeControl.value + 'px';
    textSpan.style.fontSize = fontSize;
}

// Додаємо подію "input" на поле введення
fontSizeControl.addEventListener('input', changeFontSize);

// Встановлюємо початовий розмір тексту
changeFontSize();