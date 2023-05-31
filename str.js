let userString = prompt("Введите текст для обрезки");
let startSliceIndex = prompt(
  "Введите индекс, с которого нужно начать обрезку строки"
);
let endSliceIndex = prompt(
  "Введите индекс, которым нужно закончить обрезку строки"
);
userString = userString.trim();

userString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${userString} `);
