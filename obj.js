const patients = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];
const orders = [4, 2, 1, 3];

const giveTalonsInOrder = patients.sort(
  (a, b) => orders.indexOf(a.id) - orders.indexOf(b.id)
);

console.log(giveTalonsInOrder);
