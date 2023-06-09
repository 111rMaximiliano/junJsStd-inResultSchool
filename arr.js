// reduce
const numbers = [10, 4, 100, -5, 54, 2];

const sumCubeNumbers = numbers.reduce((acc, item) => {
  return (acc += item ** 3);
}, 0);

console.log(sumCubeNumbers);

// forEach

const numbers2 = [10, 4, 100, -5, 54, 2];

let sum2 = 0;

numbers2.forEach((item2) => {
  console.log((sum2 += item2 ** 3));
});

// for of

const numbers3 = [10, 4, 100, -5, 54, 2];
let sum3 = 0;
for (const item3 of numbers3) {
  console.log((sum3 += item3 ** 3));
}

// for

const numbers4 = [10, 4, 100, -5, 54, 2];

let sum4 = 0;
for (let i = 0; i < numbers4.length; i++) {
  console.log((sum4 += numbers4[i] ** 3));
}
