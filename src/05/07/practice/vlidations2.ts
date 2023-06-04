export class ValidationError2 extends Error {}

export const checkPhoneNumber2 = (value: string) => {
  if (!value.match(/^[0-9\-]+$/)) {
    throw new ValidationError2();
  }
};
