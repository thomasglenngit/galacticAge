export class Human {
  constructor(age, lifeX, planet) {
  this.age = age;
  this.lifeX = lifeX;
  this. planet = planet;
  this.happiness;
  }

  earthAge() {
      this.age *= 365/365;    
      this.lifeX *= 1;
  }

  mercuryAge() {
    Math.floor(this.age *= 365/87.97);
    this.lifeX *= 0.9 * 365/87.97;
  }

  venusAge() {
    Math.floor(this.age *= 365/224.70);
    this.lifeX *= 0.8 * 365/224.70; 
  }

  marsAge() {
    Math.floor(this.age *= 365/686.20);
    this.lifeX *= 0.7 * 365/686.20; 
  }

  jupiterAge() {
    Math.floor(this.age *= 365/4328.90);
    this.lifeX *= 0.6 * 365/4328.90; 
  }

}

