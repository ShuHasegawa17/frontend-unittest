import { greet2 } from './greet';

describe('スパイのテスト', () => {
  test('モック関数は実行された', () => {
    const mockFn = jest.fn(); // モック関数
    mockFn();
    expect(mockFn).toBeCalled();
  });
  test('モック関数は実行されていない', () => {
    const mockFn = jest.fn();
    expect(mockFn).not.toBeCalled();
  });
  test('モック関数は2回実行された', () => {
    const mockFn = jest.fn(); // モック関数
    mockFn();
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
  test('モック関数は関数の中でも実行できる', () => {
    const mockFn = jest.fn(); // モック関数
    function greet() {
      mockFn();
    }
    greet();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  test('モック関数は実行時の引数を記録している', () => {
    const mockFn = jest.fn(); // モック関数
    function greet(msg: string) {
      mockFn(msg);
    }
    greet('hello!!');
    expect(mockFn).toHaveBeenCalledWith('hello!!');
  });
  test('モック関数はテスト対象の引数として利用できる', () => {
    const mockFn = jest.fn();
    greet2('shu', mockFn);
    expect(mockFn).toHaveBeenCalledWith(`Hello!shu`);
  });
});
