function remove (string) {
  return string.replaceAll('!','')+"!";
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));

function remove (string) {
  return string.split('').filter(n => n !== '!').join('')+'!'
}