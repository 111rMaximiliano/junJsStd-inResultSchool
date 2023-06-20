const dog = {
  name1: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name1: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  console.log(
    `${this.type} по имени ${this.name1} говорит ${this.makeSound()}`
  );
  return Object.assign({ isDomestic }, this);
}

let obj1 = makeDomestic.apply(bird, [false]);
console.log(obj1);
let obj2 = makeDomestic.bind(dog)(true);
console.log(obj2);
let obj3 = makeDomestic.call(bird, false);
console.log(obj3);
