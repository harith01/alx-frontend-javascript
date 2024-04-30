export default function updateUniqueItems(mp) {
  if (!(mp instanceof Map)) {
    throw new Error('Cannot process');
  }
  mp.forEach((key, value) => {
    if (value === 1) mp.set(key, 100);
  });
}
