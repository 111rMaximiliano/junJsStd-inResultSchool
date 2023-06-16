const getDaysBeforeBirthday = () => {
  let nextBirthdayDate = new Date("September 11, 2023");
  let restOf = new Date("June 16, 2023");
  let difference = nextBirthdayDate.getTime() - restOf.getTime();
  console.log(Math.round(difference / 1000 / 60 / 60 / 24));
};
getDaysBeforeBirthday();
