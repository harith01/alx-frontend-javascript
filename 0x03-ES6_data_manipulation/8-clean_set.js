export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof set !== 'object' || typeof startString !== 'string') return '';
  const list = [];
  set.forEach((el) => {
    if (el.startsWith(startString)) list.push(el.slice(startString.length));
  });
  return list.join('-');
}
