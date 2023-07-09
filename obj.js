// NEW CODE
const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10,
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0,
  },
};

const shoppingBag = [
  { productId: "73Wakv", count: 25 },
  { productId: "5L3db9", count: 23 },
];

function getTotalPriceOfShoppingBag(shoppingBag) {
  shoppingBag[0].price = groceries["73Wakv"].price;
  shoppingBag[0].discount = groceries["73Wakv"].discount;
  shoppingBag[1].price = groceries["5L3db9"].price;
  let sum = (
    (shoppingBag[0].price * shoppingBag[0].count) / shoppingBag[0].discount +
    shoppingBag[1].price * shoppingBag[1].count
  ).toFixed();
  console.log(sum);
}
getTotalPriceOfShoppingBag(shoppingBag);

// OLD CODE

/*
const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10,
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0,
  },
  "6L2db1": {
    name: "Nachos",
    price: 3,
    discount: 0,
  },
};
console.log(groceries);

function getTotalPriceOfShoppingBag(shoppingBag) {
  let sum = (
    (groceries["73Wakv"].price * shoppingBag[0].count) /
      groceries["73Wakv"].discount +
    groceries["5L3db9"].price * shoppingBag[1].count +
    groceries["6L2db1"].price * shoppingBag[2].count
  ).toFixed();
  return sum;
}
let shoppingBag = [
  { productId: "73Wakv", count: 2 },
  { productId: "5L3db9", count: 12 },
  { productId: "6L2db1", count: 5 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log(totalPrice);
*/
