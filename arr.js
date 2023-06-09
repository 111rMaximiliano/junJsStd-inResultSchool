let clientsEstimations = [];

function askClientToGiveEstimation() {
  let ask = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));

  if (ask >= 1 || ask <= 10) {
    clientsEstimations.push(ask);
  }
  console.log(clientsEstimations);
}

for (i = 0; clientsEstimations.length < 5; i++) {
  askClientToGiveEstimation();
}

const notGoodEstimations = clientsEstimations.filter((item) => {
  return item <= 5;
});
const GoodEstimations = clientsEstimations.filter((item) => {
  return item > 5;
});

alert(
  `Всего положительных оценок: ${GoodEstimations}. Всего отрицательных оценок: ${notGoodEstimations}.`
);
