function isDigit(s) {
  return  s.trim() === '' ? false : !Number.isNaN(Number(s));
 }