import { render, screen } from '@testing-library/react';
import { mockPostMyAddress } from '../fetchers/mock';
import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from '../testingUtils';
import { RegisterAddress2 } from './RegisterAddress2';

jest.mock('../fetchers');

const fillValuesAndSubmit = async () => {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
};

const fillInvalidValuesAndSubmit = async () => {
  const contactNumber = await inputContactNumber({
    name: '田中 太郎',
    phoneNumber: 'aaa-bbb-cccc',
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
};

beforeEach(() => {
  jest.resetAllMocks();
});

test('成功時、「登録しました」が表示される', async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress2 />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText('登録しました')).toBeInTheDocument();
});

test('失敗時、「登録に失敗しました」が表示される', async () => {
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress2 />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText('登録に失敗しました')).toBeInTheDocument();
});

test('バリデーションエラー時、メッセージが表示される', async () => {
  render(<RegisterAddress2 />);
  await fillInvalidValuesAndSubmit();
  expect(screen.getByText('不正な入力値が含まれています')).toBeInTheDocument();
});

test('不明なエラー時、メッセージが表示される', async () => {
  // mock関数を呼ばないまま、APIを実施し、不明なエラーを再現
  render(<RegisterAddress2 />);
  await fillValuesAndSubmit();
  expect(screen.getByText('不明なエラーが発生しました')).toBeInTheDocument();
});

test('snapshot:登録フォームが表示される', async () => {
  mockPostMyAddress();
  //const mockFn = mockPostMyAddress();
  const { container } = render(<RegisterAddress2 />);
  //const submitValues = await fillValuesAndSubmit();
  //expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(container).toMatchSnapshot();
});
