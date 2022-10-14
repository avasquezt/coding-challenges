function remove (string) {
  return string.slice(-1) === ('!') ? string.slice(0, -1) : string;
}

console.log('Hi!!!'.slice(-1));
console.log(remove('Hi!!!'));

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}