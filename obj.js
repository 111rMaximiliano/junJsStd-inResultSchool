const hero = {
  name: "Batman",
  health: 100,
};
console.log(hero);

const enemy = {
  name: "Joker",
  health: 100,
};
console.log(enemy);

hero.heatEnemy = function () {
  enemy.health = enemy.health - 10;
  return console.log(enemy.health);
};
hero.heatEnemy();

enemy.heatHero = function () {
  hero.health = hero.health - 10;
  return console.log(hero.health);
};
enemy.heatHero();

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (hero, enemy) => {
  while (
    (hero.health > 0 && enemy.health > 10) ||
    (enemy.health > 0 && hero.health > 10)
  ) {
    getRandomNumberInRange(0, 1);
    if (getRandomNumberInRange(0, 1) === 1) {
      enemy.heatHero();
    } else if (getRandomNumberInRange(0, 1) === 0) {
      hero.heatEnemy();
    }
  }
};

startGame(hero, enemy);

if (enemy.health > 10) {
  console.log(`enemy win!`);
  alert(`${enemy.name} победил! У него осталось ${enemy.health} здоровья`);
} else if (hero.health > 10) {
  console.log(`hero win!`);
  alert(`${hero.name} победил! У него осталось ${hero.health} здоровья`);
}
