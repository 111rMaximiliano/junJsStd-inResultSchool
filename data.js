const addDays = (date, days) => {
  const oneDay = 86400 * 1000;
  console.log(days);
  console.log(oneDay);
  return new Date(date.getTime() + days * oneDay);
};

console.log(addDays(new Date(), 3));
