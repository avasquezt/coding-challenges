function wordPattern(word) {
  let pos = Array.from(new Set(word.toLowerCase()).values());
  return word.split('').map(char => pos.indexOf(char.toLowerCase())).join('.');
}