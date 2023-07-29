// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події "submit" до форми
loginForm.addEventListener('submit', function (event) {
    // Зупиняємо стандартну дію форми (перезавантаження сторінки)
    event.preventDefault();

    // Отримуємо посилання на елементи форми (поля)
    const { email, password } = loginForm.elements;

    // Перевірка, чи всі поля заповнені
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Всі поля повинні бути заповнені!');
        return;
    }

    // Створюємо об'єкт з введеними даними
    const formData = {
        email: email.value,
        password: password.value,
    };

    // Виводимо об'єкт із введеними даними в консоль
    console.log(formData);

    // Очищаємо значення полів форми
    loginForm.reset();
});