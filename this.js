const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChanceToWin() {
    let chance = [0, 4];
    if (attacker.archer > defender.archer) {
      for (let i = 0; i <= 1; i++) {
        chance = [i, 4];
      }
    } else if (attacker.footSoldier > defender.footSoldier) {
      for (let i = 0; i <= 1; i++) {
        chance = [i, 4];
      }
    } else if (attacker.cavalry > defender.cavalry) {
      for (let i = 0; i <= 1; i++) {
        chance = [i, 4];
      }
    } else if (attacker.artillery > defender.artillery) {
      for (let i = 0; i <= 1; i++) {
        chance = [i, 4];
      }
    }
    return chance;
  },
  improveArmy() {
    attacker.archer = attacker.archer + 5;
    attacker.footSoldier = attacker.footSoldier + 5;
    attacker.cavalry = attacker.cavalry + 5;
    attacker.artillery = attacker.artillery + 5;
    return attacker;
  },
  attack(defender) {
    let res = this.checkChanceToWin();
    if (res[0] < res[1]) {
      alert(`“Наши шансы равны ${res[0]}/${res[1]}. Необходимо укрепление!”`);
      this.improveArmy();
      if (this.improveArmy) {
        res[0] = res[0] + 1;
        alert(`“Наши шансы равны ${res[0]}/${res[1]}. Необходимо укрепление!”`);
      }
      if (res[0] < res[1]) {
        this.improveArmy();
        res[0] = res[0] + 1;
        alert(`“Наши шансы равны ${res[0]}/${res[1]}. Необходимо укрепление!”`);
        alert(`“Мы усилились! Мы несомненно победим! Наши шансы высоки!”.`);
      }
      console.log(res);
    }
  },
};

attacker.attack(defender);
