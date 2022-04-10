function longest(words) {
  return words.reduce((acc, word) => word.length > acc ? word.length : acc, 0)
}