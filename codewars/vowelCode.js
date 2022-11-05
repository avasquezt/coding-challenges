function encode(string) {
    return string.replace(/[aeiou]/g, char => 'aeiou'.indexOf(char) + 1);
  }
  
  function decode(string) {
    return string.replace(/\d/g, n => 'aeiou'.charAt(n - 1));
  }