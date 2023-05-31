import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputAccount2 } from './InputAccount2';

// ユーザインベントのセットアップ
const user = userEvent.setup();

test('メールアドレス入力欄', async () => {
  render(<InputAccount2 />);
  const textBox = screen.getByRole('textbox', { name: 'メールアドレス' });
  const value = 'hasegawa@test.com';
  // textboxにvalueを入力
  await user.type(textBox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test('パスワード入力欄', async () => {
  render(<InputAccount2 />);
  expect(() => screen.getByRole('textbox', { name: 'パスワード' })).toThrow();
  // type=passwordはロールを持たないため、placeholderから取得
  expect(() => screen.getByPlaceholderText('8文字以上で入力')).not.toThrow();
  const password = screen.getByPlaceholderText('8文字以上で入力');
  const value = 'pass';
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
