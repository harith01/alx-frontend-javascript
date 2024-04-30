export default function updateUniqueItems(mp) {
  if (!(mp instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of mp) {
    if (value === 1) {
      mp.set(key, 100);
    }
  }

  return mp;
}
