function gordon(a){
  return a.split(' ').map(word => word.toUpperCase().replace(/[AEIOU]/g, char => char == 'A' ? '@' : '*') + '!!!!').join(' ');
}