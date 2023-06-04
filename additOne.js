let clientName = "Игорь";
let clientSpentForAllTime = 110;
let discount = 10;
let discount2 = 20;
let discount3 = 30;
let clientSpentToday = 25;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
  alert(`Вам предоставляется скидка в ${discount}%!`);
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
  alert(`Вам предоставляется скидка в ${discount2}%!`);
} else if (clientSpentForAllTime >= 500) {
  alert(`Вам предоставляется скидка в ${discount3}%!`);
}
clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
clientSpentToday = clientSpentToday - 2.5;
alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}$. `
);
