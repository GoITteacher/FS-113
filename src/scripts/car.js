class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

export default Car;
