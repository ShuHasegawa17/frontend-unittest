import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form2 } from './Form2';

const user = userEvent.setup();

test('「サインアップ」ボタンは非活性', () => {
  render(<Form2 />);
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled();
});

test('「利用規約の同意」にチェックすると「サインアップ」ボタンは活性化', async () => {
  render(<Form2 />);
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeEnabled();
});

test('formのアクセシブルネームは、見出しを使用', () => {
  render(<Form2 />);
  expect(
    screen.getByRole('form', { name: '新規アカウント登録' })
  ).toBeInTheDocument();
});
