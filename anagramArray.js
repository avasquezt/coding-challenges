function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(w => w.split('').sort().join('') === word);
  }