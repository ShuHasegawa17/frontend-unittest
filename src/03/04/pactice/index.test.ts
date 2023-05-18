import { add } from './index';

describe('addテスト（条件分岐）', () => {
  test('返り値は第一引数と第二引数の「和」である', () => {
    expect(add(50, 50)).toBe(100);
  });
  test('合計の上限は100である。', () => {
    expect(add(70, 80)).toBe(100);
  });
});
