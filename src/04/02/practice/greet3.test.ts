import { greet, sayGoodBye } from './greet';

// 第二引数にモック化する処理を返す
jest.mock('./greet', () => ({
  ...jest.requireActual('./greet'), // 関数を全て本来の処理のままにする
  sayGoodBye: (name: string) => `Good bye ${name}`, // モック化で書き換える処理
}));

describe('モック化テスト', () => {
  test('挨拶を返す（実際の処理）', () => {
    expect(greet('hase')).toBe('Hello hase');
  });

  test('さよならを返す（モックの処理）', () => {
    const message = 'Good bye hase';
    expect(sayGoodBye('hase')).toBe(message);
  });
});
