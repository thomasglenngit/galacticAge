import { Human } from './../src/galacticAge.js';

describe('Human class', () => {
  test('should take in a users age and life expectancy', () => {
    let testHuman = new Human();

    expect(testHuman).toMatchObject();
  });
});