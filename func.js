function getSumOfNumbers(number, type = "odd") {
  if (number === !number || number === undefined) {
    return NaN;
  }
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (type === "odd") {
      if (i % 2 != 0) sum += i;
    } else if (type === "even") {
      if (i % 2 === 0) sum += i;
    } else if (type === "") {
      sum += i;
    }
  }
  return sum;
}
console.log(getSumOfNumbers(10, ""));
