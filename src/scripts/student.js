class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

export default Student;
