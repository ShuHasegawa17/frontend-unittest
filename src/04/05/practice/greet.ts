export const greet2 = (name: string, callback?: (msg: string) => void) => {
  callback?.(`Hello!${name}`);
};
