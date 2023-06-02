let correctAnswers = 0;
let incorrectAnswers = 0;

let answer1 = 4;
let ask1 = Number(prompt("Сколько будет 2 + 2?"));
switch (ask1) {
  case 4:
    alert("Ответ Верный");
    correctAnswers++;
    break;
  default:
    alert("Ответ неверный");
    incorrectAnswers++;
    break;
}

let answer2 = 4;
let ask2 = Number(prompt("Сколько будет 2 * 2?"));
switch (ask2) {
  case 4:
    alert("Ответ Верный");
    correctAnswers++;
    break;
  default:
    alert("Ответ неверный");
    incorrectAnswers++;
    break;
}

let answer3 = 1;
let ask3 = Number(
  prompt(
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
  )
);
switch (ask3) {
  case 1:
    alert("Ответ Верный");
    correctAnswers++;
    break;
  default:
    alert("Ответ неверный");
    incorrectAnswers++;
    break;
}

let answer4 = 12;
let ask4 = Number(
  prompt(
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
  )
);
switch (ask4) {
  case 12:
    alert("Ответ Верный");
    correctAnswers++;
    break;
  default:
    alert("Ответ неверный");
    incorrectAnswers++;
    break;
}

let answer5 = 6;
let ask5 = Number(prompt("Сколько будет 2 + 2 * 2?"));
switch (ask5) {
  case 6:
    alert("Ответ Верный");
    correctAnswers++;
    break;
  default:
    alert("Ответ неверный");
    incorrectAnswers++;
    break;
}

alert(
  `Конец теста! Правильные ответы- ${correctAnswers} Неправильны ответы- ${incorrectAnswers}`
);

alert(
  `(1 ответ): ${answer1}, (2 ответ): ${answer2}, (3 ответ): ${answer3}, (4 ответ): ${answer4}, (5 ответ): ${answer5}.`
);
