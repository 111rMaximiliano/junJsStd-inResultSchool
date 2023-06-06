// function declaration
function getName1(name) {
  return `Имя равно ${name}`;
}
console.log(getName1("Maks"));

// function expression

const getName2 = function (name) {
  return `Имя равно ${name}`;
};
console.log(getName2("Vlad"));

// arrow function

const getName3 = (name) => {
  return `Имя равно ${name}`;
};
console.log(getName3("Sam"));
