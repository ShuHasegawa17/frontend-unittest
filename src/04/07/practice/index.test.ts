import { greetByTime } from '.';

describe('greetByTimer', () => {
  // テストごとの初期化
  beforeEach(() => {
    jest.useFakeTimers(); // 偽のタイマーをセット
  });
  // テストごとの後処理
  afterEach(() => {
    jest.useRealTimers(); // 本物のタイマーに戻す
  });
  test('指定時間待つと、経過時間をもってresolveされる', () => {
    jest.setSystemTime(new Date(2023, 5, 27, 11, 0, 0));
    expect(greetByTime()).toBe('おはー');
  });
  test('指定時間待つと、経過時間をもってresolveされる', () => {
    jest.setSystemTime(new Date(2023, 5, 27, 12, 0, 0));
    expect(greetByTime()).toBe('こんちは');
  });
  test('指定時間待つと、経過時間をもってresolveされる', () => {
    jest.setSystemTime(new Date(2023, 5, 27, 18, 0, 0));
    expect(greetByTime()).toBe('こんばんわ');
  });
});
