function vaporcode(string) {
  return string.replace(/ /g, '').split('').map(char => char.toUpperCase()).join('  ')
}