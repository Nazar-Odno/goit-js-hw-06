// Отримуємо посилання на елементи input та span
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо обробник події input до input елементу
nameInput.addEventListener('input', function() {
    // Отримуємо поточне значення інпута
    const inputValue = nameInput.value;

    // Перевіряємо, чи інпут не порожній
    if (inputValue.trim() !== '') {
        // Якщо інпут не порожній, встановлюємо його значення в span
        nameOutput.textContent = inputValue;
    } else {
        // Якщо інпут порожній, встановлюємо "Anonymous" у span
        nameOutput.textContent = 'Anonymous';
    }
});