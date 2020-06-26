import { Human } from './../src/age'

describe('Human class', () => {
  test('should take in a users age and life expectancy', () => {
    let testHuman = new Human(40, 80);

    expect(testHuman).toMatchObject({age: 40, lifeExpectancy: 80});
  });

  test('should calculate human age in days, and then divide by days', () => {
    let testEarthAge = new Human();
    expect(testEarthAge.earthAge).toEqual();
  });
});