let userText = prompt("Введите текст");
let wordFromText = prompt("Введите слово из текста");

userText = userText.trim();

let indexOfWord = userText.indexOf(wordFromText);

userText = userText.slice(0, indexOfWord);

alert(`Результат: ${userText}`);
