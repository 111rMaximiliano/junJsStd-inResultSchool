<form class="create-user-form">
  <label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя" />
  </label>
  <label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль" />
  </label>
  <button type="submit">Подтвердить</button>
</form>;

//innerHTML
const className = document.createElementByClass(".createUserForm");

className.innerHTML += `<label>Имя<input type ='text' name = 'userName' placeholder = 'Введите ваше имя'/></label>`;

className.innerHTML += `<label>Пароль<input type ='password' name = 'password' placeholder = 'Придумайте пароль'/></label>`;

className.innerHTML += `<button type ='submit'>Подтвердить</button>`;

//createElement
const newForm = document.createElement("form");
newForm.className = "create-user-form";

const newLabel = document.createElement("label");
newForm.newLabel.textContent = "Имя";
newForm.newLabel.inputMode = `type="text" name="userName" placeholder="Введите ваше имя"`;

const newLabel1 = document.createElement("label");
newForm.newLabel1.textContent = "Пароль";
newForm.newLabel1.inputMode = `type ='password' name = 'password' placeholder = 'Придумайте пароль'`;

const newButton = document.createElement("button");
newForm.newButton.type = "submit";
newForm.newButton.textContent = "Подтвердить";
