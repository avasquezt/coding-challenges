function toCsvText(array) {
  return array.map(elem => elem.join()).join('\n');
}