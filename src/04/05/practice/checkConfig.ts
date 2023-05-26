const config = {
  mock: true,
  feature: { syp: true },
};

export const checkConfig2 = (callback?: (payload: object) => void) => {
  callback?.(config);
};
