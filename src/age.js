export class Human {
  constructor(age, lifeExpectancy, planet) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this. planet = planet;

  }

  planetAge() {
      this.age *= 365;    
  }
  
  
}

