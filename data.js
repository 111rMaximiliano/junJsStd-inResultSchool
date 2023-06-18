const getDateFormat = (date, separator = ".") => {
  let result = "";
  let zero = result.padStart(1, "0");
  if (date.getDate() < 9) {
    result = result + zero;
  }
  result = result + date.getDate() + separator;
  if (date.getMonth() < 9) {
    result = result + zero;
  }
  result = result + (date.getMonth() + 1) + separator;
  result = result + date.getFullYear();
  return result;
};

let date = new Date("9.5.2023");
console.log(getDateFormat(date));
