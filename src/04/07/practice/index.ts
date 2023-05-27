export const greetByTime = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'おはー';
  } else if (hour < 18) {
    return 'こんちは';
  }
  return 'こんばんわ';
};
