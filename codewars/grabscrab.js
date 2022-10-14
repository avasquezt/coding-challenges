function grabscrab(anagram, dictionary, sortedAnagram = anagram.split('').sort().join('')) {
    return dictionary.filter(word => word.split('').sort().join('') == sortedAnagram);
  }