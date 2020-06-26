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

  test('should calculate human age in years on Mercury', () => {
    let testMercuryAge = new Human();
    testMercuryAge.mercuryAge();
    expect(testMercuryAge.age).toEqual();
  });

  
});