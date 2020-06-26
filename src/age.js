export class Human {
  constructor(age, lifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;

  }

  earthAge() {
    this.age * 365 /  365;
  }
}