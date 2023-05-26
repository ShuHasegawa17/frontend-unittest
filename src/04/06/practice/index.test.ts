import { checkLength2 } from '.';
import * as Fetchers from '../../fetchers';
import { httpError, postMyArticleData } from '../../fetchers/fixtures';
import { ArticleInput } from '../../fetchers/type';

jest.mock('../../fetchers');

const mockPostMyArticle = (input: ArticleInput, status = 200) => {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength2(input.title);
    checkLength2(input.body);

    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
};

const inputFactory = (input?: Partial<ArticleInput>): ArticleInput => {
  return {
    tags: ['testing'],
    title: 'Test practice',
    body: 'テストの内容を練習',
    ...input,
  };
};

describe('validationテスト', () => {
  test('バリデーション通過した場合、成功レスポンスが返る', async () => {
    const input = inputFactory();
    // モックの準備
    const mock = mockPostMyArticle(input);
    // テスト対象の関数を実行
    const data = await Fetchers.postMyArticle(input);
    expect(data).toMatchObject(expect.objectContaining(input));
    // モックが呼ばれていること
    expect(mock).toHaveBeenCalled();
  });

  test('バリデーションに失敗した場合、rejectされる', async () => {
    expect.assertions(2);
    const input = inputFactory({ title: '', body: '' });
    const mock = mockPostMyArticle(input);
    await Fetchers.postMyArticle(input).catch((err) => {
      expect(err).toMatchObject({ err: { message: expect.anything() } });
      expect(mock).toHaveBeenCalled();
    });
  });

  test('データ取得に失敗した場合、rejectされる', async () => {
    expect.assertions(2);
    const input = inputFactory();
    const mock = mockPostMyArticle(input, 503);
    await Fetchers.postMyArticle(input).catch((err) => {
      expect(err).toMatchObject({ err: { message: expect.anything() } });
      expect(mock).toHaveBeenCalled();
    });
  });
});
