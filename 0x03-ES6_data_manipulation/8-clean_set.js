export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof set !== 'object' || typeof startString !== 'string') return '';
  const newSet = new Set();
  set.forEach((el) => {
    if (el.startsWith(startString)) newSet.add(el.slice(startString.length));
  });
  return Array.from(newSet).join('-');
}
