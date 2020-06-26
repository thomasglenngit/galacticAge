export class Human {
  constructor(age, lifeExpectancy, planet) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this. planet = planet;
  
  }

  earthAge() {
      this.age *= 365/365;    
  }

  
  mercuryAge() {
    Math.floor(this.age *= 365/87.97);
  }

  venusAge() {
    Math.floor(this.age *= 365/224.70);
  }
  
}

