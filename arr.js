const goals = [8, 1, 1, 3, 2, -1, 5];
//1
alert(
  `Самый результативный матч был под номером ${goals.indexOf(
    8
  )}. В нём было забито ${goals[0]} гол(ов).`
);

//2
alert(
  `Самые нерезультативные матчи были под номерами ${goals.indexOf(
    1
  )}, ${goals.lastIndexOf(1)}. В каждом из них было забито по ${
    goals[1]
  } мячу(а).`
);

//3
const sum = goals.reduce((acc, item) => {
  return (acc += item);
}, 0);
alert(`Общее количество голов за сезон равно ${sum}`);

//4
function loseGame(goals) {
  for (let i = 5; i < goals.length; i++) {
    if (goals[i] < 1) {
      alert("Были автоматические поражения: да");
    } else {
      alert("Были автоматические поражения: нет");
    }
  }
}

loseGame(goals);

//5
const getAverage = (goals) => {
  const sum1 = goals.reduce((acc, number) => acc + number, 0);
  const length = goals.length;
  return sum1 / length;
};
const sumGetAverage = getAverage(goals);
alert(`Среднее количество голов за матч равно ${sumGetAverage}`);

//6

const sortGoals = goals.sort((a, b) => {
  return a - b;
});
alert(sortGoals);
