export class Human {
  constructor(age, lifeExpectancy, planet) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this. planet = planet;

  }

  earthAge() {
      this.age *= 365/365;
      this.lifeExpectancy -= this.age;    
  }
  
  mercuryAge() {
    this.age *= 365/87.97;
    this.lifeExpectancy -= this.age;
  }
  
}

