let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
// Через цикл for of
sum = 0;
console.log(sum);
for (let num of numbers) {
  console.log(num);
  num = num ** 3;
  console.log(num);
  sum += num;
  console.log(sum);
}
debugger;

/*
debug.js:7 10
debug.js:9 1000
debug.js:11 1000
debug.js:7 4
debug.js:9 64
debug.js:11 1064
debug.js:7 100
debug.js:9 1000000
debug.js:11 1001064
debug.js:7 -5
debug.js:9 -125
debug.js:11 1000939
debug.js:7 54
debug.js:9 157464
debug.js:11 1158403
debug.js:7 2
debug.js:9 8
debug.js:11 1158411
*/
// 1158411

// Через цикл for
let sum2 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = numbers[i] ** 3;
  sum2 += numbers[i];
  console.log(sum2);
}
/* 2316822 ( цикл продолжает работать с числом sum, необходимо создать новую sum, чтобы цикл работал отдельно!
 И тогда получаем:

debug.js:21 1000
debug.js:21 1064
debug.js:21 1001064
debug.js:21 1000939
debug.js:21 1158403
debug.js:21 1158411
*/
// 1158411
