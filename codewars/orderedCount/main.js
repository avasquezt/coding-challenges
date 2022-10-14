var orderedCount = function (text) {
  let letters = Array.from(new Set(text.split('')));
  console.log(letters);
  return letters.map(letter => [letter, text.split(letter).length - 1]);
}