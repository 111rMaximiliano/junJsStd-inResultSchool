const nextBirthdayDate = new Date("September 11, 2023");
console.log(nextBirthdayDate);
const today = new Date();
console.log(today);

const getDaysBeforeBirthday = (nextBirthdayDate) => {
  const res = Math.round(
    (nextBirthdayDate.getTime() - today.getTime()) / 1000 / 60 / 60 / 24
  );
  return res;
};
console.log(getDaysBeforeBirthday(nextBirthdayDate));
