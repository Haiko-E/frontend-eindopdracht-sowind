export function timeconvert(date) {
  const dat = new Date(date);
  return dat.toLocaleTimeString('nl-NL', { hour: '2-digit' });
}
