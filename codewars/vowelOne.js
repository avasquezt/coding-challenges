function vowelOne(s){
    return s.replace(/./g, char => ('aeiouAEIOU').includes(char) ? '1' : '0');
  }