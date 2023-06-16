const getDateFormat = (date, separator = ".") => {
  let result = "";
  if (date.getDate() < 9) {
    result = result + "0";
  }
  result = result + date.getDate() + separator;
  if (date.getMonth() < 9) {
    result = result + "0";
  }
  result = result + (date.getMonth() + 1) + separator;
  result = result + date.getFullYear();
  return result;
};

let date = new Date();
console.log(getDateFormat(date));
