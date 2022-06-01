function remove (string) {
  return string.split(' ').filter(word => [...word].filter(char => char.match(/!|¡/g)).length != 1).join(' ');
}