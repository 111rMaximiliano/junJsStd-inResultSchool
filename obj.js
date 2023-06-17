const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

const handleObject = (obj, key, action) => {
  switch (action) {
    case "get":
      return obj[key];
    case "add":
      obj[key] = "";
      return obj;
    case "delete":
      delete obj[key];
      return obj;
    case action != "get" && action != "add" && action != "delete":
      return obj;
  }
};

console.log(handleObject(student, "programmingLanguage", "get"));
