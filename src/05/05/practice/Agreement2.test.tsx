import { render, screen } from '@testing-library/react';
import { Agreement2 } from './Agreement2';

test('feildsetのアクセシブルネームはlegendを利用している', () => {
  render(<Agreement2 />);
  expect(
    screen.getByRole('group', { name: '利用規約の同意' })
  ).toBeInTheDocument();
});

test('チェックボックは未チェック', () => {
  render(<Agreement2 />);
  expect(screen.getByRole('checkbox')).not.toBeChecked();
});
