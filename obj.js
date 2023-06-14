const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};
const handleObject = (obj, key, action) => {
  if (action === "get") {
    return student.name;
  }
  if (action === "add") {
    student.getKey = "";
    return student;
  }
  if (action === "delete") {
    delete student.getKey;
    return student;
  }
  if (action === "") {
    return student;
  }
};
const result = handleObject(student, student.name, "get");
console.log("result", result);
