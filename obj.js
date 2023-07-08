const usersArray = [
  { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
  { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
  { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
  { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
  { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 },
];

const usersObject = {
  "34rdca3eeb7f6fgeed471198": {
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25,
  },
  "76rdca3eeb7f6fgeed471100": {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15,
  },
  "12rdca3eeb7f6fgeed4711012": {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13,
  },
  "32rdca3eeb7f6fgeed471101": {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31,
  },
  "98rdca3eeb7f6fgeed471102": {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18,
  },
};

function getAdultUsers() {
  if (usersObject) {
    for (key in usersObject) {
      if (usersObject[key].age >= 18) {
        console.log(usersObject[key]);
      }
    }
  }
}
if (usersArray) {
  const arr = usersArray.filter((item) => {
    return item.age >= 18;
  });
  console.log(arr);
}

getAdultUsers();
