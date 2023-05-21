import { wait } from '.';
import { timeout } from '..';

describe('非同期処理のresolveテスト', () => {
  test('指定時間まつと、経過時間をもってresolveされる', () => {
    expect.assertions(1); // return 書き忘れ防止のため、assertionsを入れる
    return wait(50).then((duration) => {
      expect(duration).toBe(50);
    });
  });
  test('指定時間まつと、経過時間をもってresolveされる', () => {
    expect.assertions(1); // return 書き忘れ防止のため、assertionsを入れる
    return expect(wait(50)).resolves.toBe(50);
  });

  test('指定時間まつと、経過時間をもってresolveされる', async () => {
    await expect(wait(50)).resolves.toBe(50);
  });

  test('指定時間まつと、経過時間をもってresolveされる', async () => {
    expect(await wait(50)).toBe(50);
  });
});

describe('非同期関数のrejectテスト', () => {
  test('指定時間まつと、経過時間をもってrejectされる', () => {
    expect.assertions(1);
    return timeout(50).catch((duration) => expect(duration).toBe(50));
  });
  test('指定時間まつと、経過時間をもってrejectされる', () => {
    expect.assertions(1);
    return expect(timeout(50)).rejects.toBe(50);
  });
  test('指定時間まつと、経過時間をもってrejectされる', async () => {
    await expect(timeout(50)).rejects.toBe(50);
  });

  test('指定時間まつと、経過時間をもってrejectされる', async () => {
    expect.assertions(1); // catch句のアサーションが呼ばれていることの検証
    try {
      await timeout(50);
    } catch (err) {
      expect(err).toBe(50);
    }
  });
});
