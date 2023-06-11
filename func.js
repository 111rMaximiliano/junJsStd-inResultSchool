const text = "Привет! Как дела! Давно мы с тобой не виделись.";
const showSuccessMessage = (message) => {
  console.log(message);
};

const showErrorMessage = (message) => {
  console.error(message);
};

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  if (text.indexOf("а")) {
    errorCallback(
      `Найден запрещенный символ 'a' под индексом ${text.indexOf("а")}`
    );
  } else {
    successCallback(`В данном тексте нет запрещенных символов`);
  }
};

checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
