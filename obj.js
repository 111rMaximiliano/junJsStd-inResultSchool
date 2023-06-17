const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const giveJobToStudent = (student, jobName) => {
  let newObjStud = {};
  newObjStud = { ...student };
  newObjStud.job = "jobName";
  alert(`Поздравляем! У студента ${newObjStud.fullName} появилась новая работа!
  Теперь он ${[newObjStud.job]}`);
  console.log(newObjStud);
  return newObjStud;
};

giveJobToStudent(student, "веб-разработчик");
