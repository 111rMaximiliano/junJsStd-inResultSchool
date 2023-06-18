const goals = [8, 1, 1, 3, 2, -1, 5];

//1
function goalsMax(goals) {
  return Math.max.apply(null, goals);
}
console.log(goalsMax(goals));

const maxGoals = goals.findIndex((item) => {
  return item === goalsMax(goals);
});
console.log(maxGoals);
alert(
  `Самый результативный матч был под номером ${maxGoals}. В нём было забито ${goalsMax(
    goals
  )} голов.`
);

//2

const minGoal = goals.filter((number, index, goals) => {
  // console.log(index);
  return goals.indexOf(number) == 1;
});
console.log(minGoal);

alert(
  `Самые нерезультативные матчи были под номерами ${goals.indexOf(
    1
  )} и ${goals.lastIndexOf(1)} . В каждом из них было забито ${minGoal}`
);

//3

function numbersOfGoals(goals) {
  let sum = 0;
  for (let i = 0; i < goals.length; i++) {
    sum += goals[i];
  }
  return sum;
}

alert(`Общее количество голов за сезон равно ${numbersOfGoals(goals)}`);

//4
function goalsMin(goals) {
  return Math.min.apply(null, goals);
}
console.log(goalsMin(goals));

if (goalsMin(goals) <= 0) {
  alert(`Были автоматические поражения: Да`);
} else {
  alert(`Были автоматические поражения: Нет`);
}

//5

const getAverage = (goals) => {
  const sum1 = goals.reduce((acc, number) => acc + number, 0);
  const length = goals.length;
  return sum1 / length;
};
const sumGetAverage = getAverage(goals).toFixed();
alert(`Среднее количество голов за матч равно ${sumGetAverage}`);

//6
const sortGoals = goals.sort((a, b) => {
  return a - b;
});
alert(sortGoals);
