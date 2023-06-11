function checkQuestionAnswer() {
  let question = prompt("Арбуз это фрукт или ягода?");
  let correctAnswer = "Ягода";
  question = question.toLowerCase().trim();
  correctAnswer = correctAnswer.toLowerCase();
  if (question == correctAnswer) {
    alert("Ответ верный");
  } else {
    alert("Ответ неверный");
  }

  let question1 = prompt("Сколько в среднем зубов у взрослого человека?");
  let correctAnswer1 = "32";
  question1 = question1.toLowerCase().trim();
  correctAnswer1 = correctAnswer1.toLowerCase();
  if (question1 == correctAnswer1) {
    alert("Ответ верный");
  } else {
    alert("Ответ неверный");
  }
  let question2 = prompt("Как называется самая маленькая птица в мире?");
  let correctAnswer2 = "Колибри";
  question2 = question2.toLowerCase().trim();
  correctAnswer2 = correctAnswer2.toLowerCase();

  if (question2 == correctAnswer2) {
    alert("Ответ верный");
  } else {
    alert("Ответ неверный");
  }
}
checkQuestionAnswer();
