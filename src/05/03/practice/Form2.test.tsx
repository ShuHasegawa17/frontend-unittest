import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { Form2 } from './Form2';

describe('UIコンポーネントテスト', () => {
  test('名前の表示', () => {
    // レンダリング
    render(<Form2 name="hase" />);
    // テキストを取得
    const text = screen.getByText('hase');
    // 取得したテキストがDOMに存在するか。
    expect(text).toBeInTheDocument();
  });
  test('ボタンの表示', () => {
    render(
      <>
        <Form2 name="chisa" />
      </>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('見出しの表示', () => {
    render(<Form2 name="hase" />);
    expect(screen.getByRole('heading')).toHaveTextContent('アカウント情報');
  });
  test('ボタンを押すとイベントハンドラーが実行される', () => {
    // モック関数をサブミット引数に渡す。
    const mockFn = jest.fn();
    render(<Form2 name="hase" onSubmit={mockFn} />);
    // クリック
    fireEvent.click(screen.getByRole('button'));
    // モック関数が呼ばれたこと。
    expect(mockFn).toHaveBeenCalled();
  });
});
test('snap', () => {
  const { container } = render(<Form2 name="hase" />);
  expect(container).toMatchSnapshot();
});
test('logRoles: レンダリング結果からロールとアクセシブルネームを確認', () => {
  const { container } = render(<Form2 name="taro" />);
  logRoles(container);
});
