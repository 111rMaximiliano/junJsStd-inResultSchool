let num1 = 0;
let num2 = 0;
let expression = [num1, "", num2];

console.log(expression);

function getMathResult(expression) {
  switch (expression[1]) {
    case ">":
      return expression[0] > expression[2];
    case "<":
      return expression[0] < expression[2];
    case "=":
      return (expression[0] = expression[2]);
    case "+":
      return expression[0] + expression[2];
    case "-":
      return expression[0] - expression[2];
    case "*":
      return expression[0] * expression[2];
    case "/":
      return expression[0] / expression[2];
    default:
      alert("ОШИБКА");
  }
}
console.log(getMathResult([300, "/", 100]));
