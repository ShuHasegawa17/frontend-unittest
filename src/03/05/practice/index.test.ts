import { add, RangeError, sub } from '.';

describe('四則演算', () => {
  describe('add', () => {
    test('引数の合計を表示する', () => {
      expect(add(10, 20)).toBe(30);
    });
    test('引数の合計は最大100までを表示', () => {
      expect(add(50, 51)).toBe(100);
    });
    test('引数が0〜100の範囲外だった場合、例外をスローする', () => {
      const message = '入力値は0〜100の間で入力してください。';
      expect(() => add(-10, 100)).toThrow(message);
      expect(() => add(1, -10)).toThrow(message);
      expect(() => add(-10, 110)).toThrow(message);
    });
  });
  describe('sub', () => {
    test('引数の差を表示する', () => {
      expect(sub(50, 30)).toBe(20);
    });
    test('引数の差の最小値は0までを表示', () => {
      expect(sub(10, 11)).toBe(0);
    });
    test('引数が０〜100の範囲外だった場合、例外をスローする', () => {
      expect(() => sub(-10, 10)).toThrow(RangeError);
      expect(() => sub(1, -10)).toThrow(RangeError);
      expect(() => sub(-10, 110)).toThrow(Error);
    });
  });
});
