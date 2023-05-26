import { checkConfig2 } from './checkConfig';

describe('スパイテスト（オブジェクト引数）', () => {
  test('モック関数は実行時引数のオブジェクト検証ができる', () => {
    const mockFn = jest.fn();
    checkConfig2(mockFn);
    expect(mockFn).toHaveBeenCalledWith({
      mock: true,
      feature: { syp: true },
    });
  });

  test('実行時引数のオブジェクトの部分的な検証ができる', () => {
    const mockFn = jest.fn();
    checkConfig2(mockFn);
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({
        mock: true,
      })
    );
  });
});
