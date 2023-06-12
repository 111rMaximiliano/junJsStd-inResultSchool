let expression = [200, "-", 100];
function getMathResult() {
  switch (expression[1]) {
    case ">":
      expression = expression[0] > expression[2];
      break;
    case "<":
      expression = expression[0] < expression[2];
      break;
    case "=":
      expression = expression[0] = expression[2];
      break;
    case "+":
      expression = expression[0] + expression[2];
      break;
    case "-":
      expression = expression[0] - expression[2];
      break;
    case "*":
      expression = expression[0] * expression[2];
      break;
    case "/":
      expression = expression[0] / expression[2];
      break;
    default:
      alert("ОШИБКА");
  }
  console.log(expression);
}
getMathResult();
