  let clickCount = 0; // Инициализируем счетчик
  const requiredClicks = 24; // Необходимое количество нажатий

  const button = document.getElementById('myButton');

  button.addEventListener('click', function() {
    clickCount++; // Увеличиваем счетчик при каждом нажатии
    console.log(`Нажатий: ${clickCount}`); // Для отладки

    if (clickCount === requiredClicks) {
      alert('Достигнуто нужное количество нажатий!');
      window.location.href = 'https://www.example.com'; // Перенаправляем на другую страницу
    }
  });