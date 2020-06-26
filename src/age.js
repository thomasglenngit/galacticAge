export class Human {
  constructor(age, lifeX, planet) {
  this.age = age;
  this.lifeX = lifeX;
  this. planet = planet;
  this.happiness;
  
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

  marsAge() {
    Math.floor(this.age *= 365/686.20);
  }

  jupiterAge() {
    Math.floor(this.age *= 365/4328.90);
  }

  solarLife() {
    if (this.planet === "earth") {
      this.lifeX = this.age * 2;
    } else if (this.planet === "mercury") {
      this.lifeX = this.age * 1.5;
    } else if (this.planet === "venus") {
      this.lifeX = this.age * 1.3;
    } else if (this.planet === "mars") {
      this.lifeX = this.age * 1.2;
    } else {
      this.lifeX = this.age * 1.1;
    }

  }
  
}

