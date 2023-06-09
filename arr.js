function getSumOfSequence(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  let sum = 0;
  sum = arr[0] + arr.at(-1);
  console.log(arr, sum);
}
getSumOfSequence(12);
