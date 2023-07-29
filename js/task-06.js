const inputElement = document.getElementById('validation-input');

    // Функція для перевірки кількості символів при втраті фокусу
    function checkInputLength() {
      const expectedLength = inputElement.dataset.length;
      const inputValue = inputElement.value.trim();
      const isValid = inputValue.length === parseInt(expectedLength);

      // Додаємо або видаляємо класи для стилізації
      if (isValid) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
      }
    }

    // Додаємо обробник події "blur" для інпуту
    inputElement.addEventListener('blur', checkInputLength);