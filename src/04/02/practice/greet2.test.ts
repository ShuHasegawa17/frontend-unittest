import { greet } from './greet';

jest.mock('./greet');

test('挨拶を返さない（モック化）', () => {
  expect(greet('hase')).toBe(undefined);
});
