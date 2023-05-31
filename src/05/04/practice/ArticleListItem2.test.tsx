import { render, screen } from '@testing-library/react';
import { ArticleListItem2, ItemProps } from './ArticleListItem2';

const item: ItemProps = {
  id: 'test001',
  title: 'テスト記事',
  body: 'テストの内容です。',
};

test('IDに紐づいたリンクが表示される', () => {
  render(<ArticleListItem2 {...item}></ArticleListItem2>);
  const detailLink = screen.getByRole('link', { name: 'もっと見る！' });
  expect(detailLink).toHaveAttribute('href', '/article/test001');
});
