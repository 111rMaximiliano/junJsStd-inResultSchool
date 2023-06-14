function giveJobToStudent() {
  const student = {
    fullName: "Максим",
    experienceInMonths: 12,
    stack: ["HTML", "CSS", "JavaScript", "React"],
  };
  const updatedStudent = {
    ...student,
    job: "experience",
  };

  alert(
    `Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`
  );
  console.log(updatedStudent);
}

giveJobToStudent();
