const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

function newElement(elem) {
  let newE = document.createElement(elem);
  return newE;
}
const formNew = newElement("form");
formNew.dataset.id = tasks[0].id;
formNew.className = "checkbox-form";
//console.log(formNew);
const inputNew = newElement("input");
inputNew.id = tasks[0].id;
inputNew.className = "checkbox-form__checkbox";
//console.log(inputNew);
const newLabel = newElement("label");
newLabel.id = tasks[0].id;
newLabel.htmlFor = "task-1";
//console.log(newLabel);
const newSpan = newElement("span");
newSpan.textContent = tasks[0].text;
newSpan.className = "task-item__text";
//console.log(newSpan);
const newButton = newElement("button");
newButton.textContent = "Удалить";
newButton.className = "task-item__delete-button default-button delete-button";
//console.log(newButton);
//
const div1 = document.querySelector(".tasks-list");
div1.prepend(formNew);
const form1 = document.querySelector(".checkbox-form");
form1.prepend(inputNew);
//console.log(div1);
const label1 = document.querySelector(".checkbox-form");
label1.append(newLabel);
const div2 = document.querySelector(".checkbox-form");
div2.append(newSpan);
const div3 = document.querySelector(".task-item__text");
div3.append(newButton);

//
//

const formNew1 = newElement("form");
formNew1.dataset.id = tasks[1].id;
formNew1.className = "checkbox-form";
//console.log(formNew);
const inputNew1 = newElement("input");
inputNew1.id = tasks[1].id;
inputNew1.className = "checkbox-form__checkbox";
//console.log(inputNew);
const newLabel1 = newElement("label");
newLabel1.id = tasks[1].id;
newLabel1.htmlFor = "task-1";
//console.log(newLabel);
const newSpan1 = newElement("span");
newSpan1.textContent = tasks[1].text;
newSpan1.className = "task-item__text";
//console.log(newSpan);
const newButton1 = newElement("button");
newButton1.textContent = "Удалить";
newButton1.className = "task-item__delete-button default-button delete-button";
//console.log(newButton);
//
const div4 = document.querySelector(".tasks-list");
div4.prepend(formNew1);
const form2 = document.querySelector(".checkbox-form");
form2.prepend(inputNew1);
//console.log(div1);
const label2 = document.querySelector(".checkbox-form");
label2.append(newLabel1);
const div5 = document.querySelector(".checkbox-form");
div5.append(newSpan1);
const div6 = document.querySelector(".task-item__text");
div6.append(newButton1);

//
//
const formNew2 = newElement("form");
formNew2.dataset.id = tasks[2].id;
formNew2.className = "checkbox-form";
//console.log(formNew);
const inputNew2 = newElement("input");
inputNew2.id = tasks[2].id;
inputNew2.className = "checkbox-form__checkbox";
//console.log(inputNew);
const newLabel2 = newElement("label");
newLabel2.id = tasks[2].id;
newLabel2.htmlFor = "task-1";
//console.log(newLabel);
const newSpan2 = newElement("span");
newSpan2.textContent = tasks[2].text;
newSpan2.className = "task-item__text";
//console.log(newSpan);
const newButton2 = newElement("button");
newButton2.textContent = "Удалить";
newButton2.className = "task-item__delete-button default-button delete-button";
//console.log(newButton);
//
const div7 = document.querySelector(".tasks-list");
div7.prepend(formNew2);
const form3 = document.querySelector(".checkbox-form");
form3.prepend(inputNew2);
//console.log(div1);
const label3 = document.querySelector(".checkbox-form");
label3.append(newLabel2);
const div8 = document.querySelector(".checkbox-form");
div8.append(newSpan2);
const div9 = document.querySelector(".task-item__text");
div9.append(newButton2);

//
//
