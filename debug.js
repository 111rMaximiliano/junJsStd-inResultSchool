let health = prompt('Введите число параметра "здоровье" для персонажа');
if (health <= 0 || !health) {
  // breakpoint на 2, в браузере
  alert('Параметр "здоровье" должен быть больше нуля!');
  // breakpoint на 5, в браузере
} else {
  alert(`Параметр "здоровье" равен ${health}`);
  // breakpoint на 7, в браузере
}
debugger;
