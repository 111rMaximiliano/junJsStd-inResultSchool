const myName = "Maks";
const programmingLanguage = "JavaScript";
const courseCreatorName = "ResultSchool";
const reasonText = "this is my future";
const numberOfMonth = "6";

let myInfoText = `"Всем привет! Меня зовут ${myName}. Cейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!"`;

myInfoText = myInfoText.replaceAll("JavaScript", "javascript");
myInfoText = myInfoText.replaceAll("ResultSchool", "resultschool");

console.log(myInfoText);

console.log(myInfoText.length);

console.log(myInfoText[0], myInfoText.length - 1, myInfoText[263]);
