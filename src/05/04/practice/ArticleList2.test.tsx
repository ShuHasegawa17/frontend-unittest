import { render, screen, within } from '@testing-library/react';
import { items } from '../fixture';
import { ArticleList2 } from './ArticleList2';

describe('一覧UIコンポーネントのテスト', () => {
  // test('itemsの数だけ一覧表示される', () => {
  //   render(<ArticleList2 items={items}></ArticleList2>);
  //   expect(screen.getAllByRole('listitem')).toHaveLength(3);
  // });
  test('itemsの数だけ一覧表示される', () => {
    render(<ArticleList2 items={items}></ArticleList2>);
    // ul要素の取得
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    // 要素の絞り込み(ul内のli)
    const listItem = within(list).getAllByRole('listitem');
    expect(listItem).toHaveLength(3);
  });
  test('一覧アイテムが空のとき「投稿記事がありません！」が表示される', () => {
    render(<ArticleList2 items={[]}></ArticleList2>);
    // getByRoleだと存在ない場合はエラーがスローされるため、queryByRoleを使用する。
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
    expect(list).toBeNull();
    const noText = '投稿記事がありません！';
    expect(screen.getByText(noText)).toBeInTheDocument();
  });
});
