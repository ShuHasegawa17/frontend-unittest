import { divide, multi } from '.';

describe('掛け算割り算', () => {
  describe('multi', () => {
    test('2 * 3 は 6', () => {
      expect(multi(2, 3)).toBe(6);
    });
  });
  describe('divide', () => {
    test('10 / 2 は 5', () => {
      expect(divide(10, 2)).toBe(5);
    });
  });
});
