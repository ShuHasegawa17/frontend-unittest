import { getGreed } from '.';
import * as Fetchers from '../../fetchers';
import { httpError } from '../../fetchers/fixtures';

// 置き換えの宣言
jest.mock('../../fetchers');

describe('Web APIのモック化（spyon）', () => {
  test('データ取得成功時：ユーザ名なしの場合', async () => {
    jest
      // 置き換え対象の関数(getGreedから呼ばれてる)
      .spyOn(Fetchers, 'getMyProfile')
      // データ取得成功時のspy処理
      .mockResolvedValueOnce({
        id: '123-456',
        email: 'abc.com',
      });
    await expect(getGreed()).resolves.toBe('Hello, anonymous user!!');
  });

  test('データ取得成功時：ユーザ名有りの場合', async () => {
    jest
      // 置き換え対象の関数
      .spyOn(Fetchers, 'getMyProfile')
      // データ取得成功時のspy処理
      .mockResolvedValueOnce({
        id: '123-456',
        email: 'abc.com',
        name: 'hasegawa',
      });
    expect(await getGreed()).toBe('Hello, hasegawa !!');
  });

  test('データ取得失敗時、エラーのデータが例外としてスローされる', async () => {
    expect.assertions(1);
    jest.spyOn(Fetchers, 'getMyProfile').mockRejectedValueOnce(httpError);

    try {
      await getGreed();
    } catch (error) {
      expect(error).toMatchObject({
        err: { message: 'internal server error' },
      });
    }
  });
});
