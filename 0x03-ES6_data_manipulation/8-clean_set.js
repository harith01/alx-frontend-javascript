export default function cleanSet(set, startString) {
  const newSet = new Set();
  if (startString.length === 0) return '';
  set.forEach((el) => {
    if (el.startsWith(startString)) newSet.add(el.slice(startString.length));
  });
  return Array.from(newSet).join('-');
}
