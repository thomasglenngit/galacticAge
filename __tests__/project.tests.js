import { Human } from './../src/age'

describe('Human class', () => {

    let testHuman;
   

  beforeEach(() => {
    testHuman = new Human(43);
    
  });

  // test('should take in a users age and life expectancy', () => {
  //   expect(testHuman).toMatchObject({age: 43, lifeX: 80, planet: "earth"});
  // });

  test('should calculate human age in years on every planet', () => {
    testHuman.earthAge();
    expect(testHuman.age).toEqual(43);
  });

  test('should calculate human age in years on Mercury', () => {
    // let testHuman = new Human(43);
    testHuman.mercuryAge();
    expect(testHuman.age).toEqual(178.41309537342278);
  });

  test('should calculate human age in years on Venus', () => {
    testHuman.venusAge();
    expect(testHuman.age).toBeCloseTo(69.8486871);
  });

  test('should calculate human age in year on Mars', () => {
    testHuman.marsAge();
    expect(testHuman.age).toBeCloseTo(22.8723404);
  });

  test('should calculate human age in years on Jupiter', () => {
    testHuman.jupiterAge();
    expect(testHuman.age).toBeCloseTo(3.62563238);
  });
  
  test('this function should calculate life expectancy on each planet', () => {
    let testSolarLife = new Human(43, 10, "earth");
    testSolarLife.solarLife();
    expect(testSolarLife.lifeX).toBe(96);
  })

});