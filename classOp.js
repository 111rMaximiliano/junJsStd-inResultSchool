class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(other) {
    if (this.age > other.age) {
      return alert(`${this.name} старше, чем ${other.name}`);
    } else if (this.age < other.age) {
      return alert(`${this.name} младше, чем ${other.name}`);
    }
  }
}

const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 23);
person1.compareAge(person2);
person2.compareAge(person3);
person3.compareAge(person1);
