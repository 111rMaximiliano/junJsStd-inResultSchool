const sum = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};
console.log(sum(12, 3, 12, 165, 12, 14));
