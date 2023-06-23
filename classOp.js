class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.techonologies = [];
    this.status = "Junior";
  }
  setTechnologies(techonologies) {
    return (this.techonologies = [...this.techonologies, ...techonologies]);
  }
  setNewStatus(newStatus) {
    return (this.status = newStatus);
  }
}

const student = new Student("Maxim", 20);
student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewStatus("Middle");
console.log(student);
