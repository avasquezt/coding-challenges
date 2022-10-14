String.prototype.toAlternatingCase = function(){
  return this.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
}

console.log('HeLlO wOrLd'.toAlternatingCase());