function getDivisorsCount(number) {
  if (number === undefined || !number) {
    return NaN;
  } else if (number < 0 || !Number.isInteger(number)) {
    alert(`'number' должен быть целым числом или больше нуля!`);
  }
  let half = Math.floor(number / 2);
  count = 1;
  for (let i = 1; i <= half; i++) {
    if (!(number % i)) ++count;
  }
  return count;
}
console.log(getDivisorsCount(30));
