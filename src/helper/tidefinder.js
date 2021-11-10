export const tidefinder = (tides) => {
  const result = tides.find((tide) => {
    if ((tide.tp && tide.tp === 'high') || tide.tp === 'low') {
      return tide;
    }
  });
  return result;
};
