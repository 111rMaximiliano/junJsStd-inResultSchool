let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  i++;
  alert(`Добро пожаловать, ${newStudent}!`);
}
