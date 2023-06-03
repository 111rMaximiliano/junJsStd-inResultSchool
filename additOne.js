let javaScriptDescription =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
javaScriptDescription = javaScriptDescription.slice(1, 114);
javaScriptDescription = javaScriptDescription.toUpperCase();
//javaScriptDescription = javaScriptDescription.translitCyrToLat() как провести транслитерацию так и не понял, плагин не срабатывает, написал коллегам в дискорд
javaScriptDescription = javaScriptDescription.trim();
javaScriptDescription =
  javaScriptDescription +
  javaScriptDescription +
  javaScriptDescription +
  javaScriptDescription;
console.log(javaScriptDescription.indexOf("ПОДДЕРЖИВАЕТ"));
console.log(javaScriptDescription);
