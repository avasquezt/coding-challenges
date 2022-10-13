function sc(said,suspects, pattern = said.toLowerCase().split('')){
    return suspects.filter(name => pattern.every((char, i) => char !== '~' ? char === name.toLowerCase()[i] : true)).join() || '';
  }