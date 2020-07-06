import { Human } from './../src/age'

describe('Human class', () => {

    let testHuman;

  beforeEach(() => {
    testHuman = new Human(43, 80, "earth");
  });

  test('should calculate human age in years on earth', () => {
    testHuman.earthAge();
    expect(testHuman.age).toEqual(43);
    expect(testHuman.lifeX).toEqual(80);
  });

  test('should calculate human age in years on Mercury', () => {
    testHuman.mercuryAge();
    expect(testHuman.age).toEqual(178.41309537342278);
    expect(testHuman.lifeX).toBeCloseTo(298.738);
  });

  test('should calculate human age in years on Venus', () => {
    testHuman.venusAge();
    expect(testHuman.age).toBeCloseTo(69.8486871);
    expect(testHuman.lifeX).toBeCloseTo(103.960);
  });

  test('should calculate human age in year on Mars', () => {
    testHuman.marsAge();
    expect(testHuman.age).toBeCloseTo(22.8723404);
    expect(testHuman.lifeX).toBeCloseTo(29.787);
  });

  test('should calculate human age in years on Jupiter', () => {
    testHuman.jupiterAge();
    expect(testHuman.age).toBeCloseTo(3.62563238);
    expect(testHuman.lifeX).toBeCloseTo(4.04721);
  });

});