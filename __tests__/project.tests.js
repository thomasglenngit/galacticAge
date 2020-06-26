import { Human } from 

describe('Human class', () => {
  test('should take in a users age and life expectancy', () => {
    let testHuman = new Human(40, 80);

    expect(testHuman).toMatchObject({age: 40, lifeExpectancy: 80});
  });
});