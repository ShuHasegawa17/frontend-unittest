export class ValidationError2 extends Error {}

export const checkLength2 = (value: string) => {
  if (!value.length) {
    throw new ValidationError2('1文字以上入力してください。');
  }
};
