import { ArticleListItem2, ItemProps } from './ArticleListItem2';

type Props = {
  items: ItemProps[];
};

export const ArticleList2 = ({ items }: Props) => {
  return (
    <div>
      <h2>記事一覧！</h2>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <ArticleListItem2 {...item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>投稿記事がありません！</p>
      )}
    </div>
  );
};
