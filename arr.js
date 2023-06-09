const coffees = ["Latte", "Cappuccino", "Americano"];

let coffees2 = ["Latte", "Cappuccino", "Americano"];

let coffeeName = prompt("Поиск кофе по названию:");

const searchCoffee = coffees2.findIndex((name) => name == coffeeName);

if (
  coffeeName === coffees2[0] ||
  coffeeName === coffees2[1] ||
  coffeeName === coffees2[2]
) {
  alert(
    `Держите ваш любимый кофе ${coffeeName}. Он ${searchCoffee} по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}
