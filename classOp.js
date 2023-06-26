class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.name = name;
    this.words = {};
    this.#name = "Сложные слова";
    this.#words = {};
  }
  get mainName() {
    return this.#name;
  }
  set mainName(newValue) {
    this.#name = newValue;
  }
  get allWords() {
    return this.#words;
  }
  addNewWord(word, description) {
    this.#words[word] = description;
  }
  add(word, description) {
    if (word in this.words) {
      return words;
    } else this.addNewWord(word, description);
  }
  remove(word) {
    delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }
  showAllWords() {
    //console.log(dictionary);
    console.log(hardWordsDictionary);
  }
}
class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    {
      this.words[word] = { word, description, isDifficult: true };
    }
  }
}
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

//hardWordsDictionary.add(
//  "дилетант",
//  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
//);

//hardWordsDictionary.add(
// "неологизм",
// "Новое слово или выражение, а также новое значение старого слова."
//);

//hardWordsDictionary.add(
//  "квант",
//  "Неделимая часть какой-либо величины в физике."
//);

//hardWordsDictionary.remove('неологизм');

//hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName);
hardWordsDictionary.mainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName);
hardWordsDictionary.addNewWord(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);
hardWordsDictionary.addNewWord(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);
console.log(hardWordsDictionary.allWords);
