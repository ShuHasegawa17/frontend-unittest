export type ItemProps = {
  id: string;
  title: string;
  body: string;
};

export const ArticleListItem2 = ({ id, title, body }: ItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <a href={`/article/${id}`}>もっと見る！</a>
    </li>
  );
};
