const toFreud = string => string ? string.split(' ').map(word => 'sex').join(' ') : ''

console.log(toFreud(''));
console.log(toFreud("test"));
console.log(toFreud("This is a test"));

console.log(('').split(' '));