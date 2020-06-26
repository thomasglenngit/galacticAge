import { Human } from './../src/age'

describe('Human class', () => {
  test('should take in a users age and life expectancy', () => {
    let testHuman = new Human(40, 80, "earth");
    expect(testHuman).toMatchObject({age: 40, lifeExpectancy: 80, planet: "earth"});
  });

  test('should calculate human age in years', () => {
    let testEarthAge = new Human(43);
    testEarthAge.earthAge();
    expect(testEarthAge.age).toEqual(43);
  });

  test('should calculate human age in years on Mercury', () => {
    let testMercuryAge = new Human(43);
    testMercuryAge.mercuryAge();
    expect(testMercuryAge.age).toEqual(178.41309537342278);
  });

  test('should calculate human age in years on Venus', () => {
    let testVenusAge = new Human(43);
    testVenusAge.venusAge();
    expect(testVenusAge.age).toBeCloseTo(69.8486871);
  });

  test('should calculate human age in year on Mars', () => {
    let testMarsAge = new Human(43);
    testMarsAge.marsAge();
    expect(testMarsAge.age).toBeCloseTo(22.8723404);
  });

  test('should calculate human age in years on Jupiter', () => {
    let testJupiterAge = new Human ();
    testJupiterAge.jupiterAge();
    expect(testJupiterAge.age).toBeCloseTo();
  });

  
});