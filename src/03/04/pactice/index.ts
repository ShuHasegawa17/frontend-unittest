export function add(a: number, b: number) {
  const sum = a + b;
  return sum > 100 ? 100 : sum;
  // if (sum > 100) {
  //   return 100;
  // }
  // return sum;
}
