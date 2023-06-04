let discount = 10;
let discount2 = 20;
let discount3 = 30;
let clientName = prompt("Введите имя клиента");
let clientSpentToday = Number(prompt("Cколько клиент потратил сегодня?"));
let clientSpentForAllTime = Number(
  prompt("Сколько клиент потратил за всё время?")
);

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
  alert(`Вам предоставляется скидка в ${discount}%!`);
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
  alert(`Вам предоставляется скидка в ${discount2}%!`);
} else if (clientSpentForAllTime >= 500) {
  alert(`Вам предоставляется скидка в ${discount3}%!`);
} else if (clientSpentToday !== Number && clientSpentForAllTime !== Number) {
  alert(
    "Cумма, которую клиент потратил за всё время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку"
  );
}
