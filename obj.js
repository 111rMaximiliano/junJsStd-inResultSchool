const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2040",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2041",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2039",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2010",
  },
];

//console.log(Date.parse(peopleWithVisa[1].passportExpiration));
//console.log(Date.parse(peopleWithVisa[3].passportExpiration));
//console.log(Date.now());

//let date1 = Date.parse(peopleWithVisa[1].passportExpiration);
//let date2 = Date.parse(peopleWithVisa[3].passportExpiration);
let date3 = Date.now();

function allowVisa(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (
      value.criminalRecord == false &&
      Date.parse(value.passportExpiration) > date3
    ) {
      console.log([key, value]);
    }
  }
}
allowVisa(peopleWithVisa);
