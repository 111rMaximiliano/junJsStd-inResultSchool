let existingUserLogin = "the_best_user";
let existingUserPassword = 12345678;

let userLogin = prompt("Введите логин");
let userPassword = Number(prompt("Введите пароль"));

userLogin = userLogin.trim();

const welcome =
  userLogin === existingUserLogin && userPassword === existingUserPassword
    ? alert("Welcome the_best_user")
    : alert("Login or password is invalid");
