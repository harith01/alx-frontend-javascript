export default function cleanSet(set, startString) {
  const list = [];
  if (startString.length === 0
      || typeof set !== 'object'
      || typeof startString !== 'string') {
    return '';
  }
  

  for (const el of set) {
    if (el && el.startsWith(startString)) {
      list.push(el.slice(startString.length));
    }
  }
  return list.join('-');
}
