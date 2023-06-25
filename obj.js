const applicants = {
  "011": {
    name: "Максим",
    age: 25,
  },
  "012": {
    name: "Светлана",
    age: 20,
  },
  "013": {
    name: "Екатерина",
    age: 35,
  },
};

const winnerObject = {
  prize: "10 000$",
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner() {
  let resultWinner = {};

  let result = getRandomNumberInRange(1, 4);
  if (result === 1) {
    resultWinner = { ...winnerObject, ...applicants["011"] };
  } else if (result === 2) {
    resultWinner = { ...winnerObject, ...applicants["012"] };
  } else if (result === 3) {
    resultWinner = { ...winnerObject, ...applicants["013"] };
  }
  console.log(resultWinner);
}
getWinner();
