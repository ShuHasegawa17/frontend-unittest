import { getMyArticleLinksByCategory2 } from '.';
import * as Fetchers from '../../fetchers';
import { getMyArticlesData, httpError } from '../../fetchers/fixtures';

jest.mock('../../fetchers');
describe('httpレスポンスの再現テスト', () => {
  function mockGetMyArticle(status = 200) {
    if (status > 200) {
      return jest
        .spyOn(Fetchers, 'getMyArticles')
        .mockRejectedValueOnce(httpError);
    }
    return jest
      .spyOn(Fetchers, 'getMyArticles')
      .mockResolvedValueOnce(getMyArticlesData);
  }
  test('一致するタグがない場合、nullを返す', async () => {
    // apiのモック化
    mockGetMyArticle();
    const data = await getMyArticleLinksByCategory2('vue');
    expect(data).toBeNull();
  });
  test('一致するタグがある場合、リンク一覧を返す', async () => {
    mockGetMyArticle();
    const data = await getMyArticleLinksByCategory2('testing');
    expect(data).toMatchObject([
      {
        title: 'TypeScript を使ったテストの書き方',
        link: '/article/howto-testing-with-typescript',
      },
      {
        title: 'Jest ではじめる React のコンポーネントテスト',
        link: '/article/react-component-testing-with-jest',
      },
    ]);
  });
  test('レスポンスエラー時、rejectされる', async () => {
    mockGetMyArticle(500);
    await getMyArticleLinksByCategory2('testing').catch((err) => {
      expect(err).toMatchObject({
        err: { message: 'internal server error' },
      });
    });
  });
});
