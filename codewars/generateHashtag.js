function generateHashtag (str) {
    str = str.trim();
    if (!str.length) return false;
    str = str.split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join('');
    return str.length < 140 ? '#' + str : false;
  }

function generateHashtag(str){
  str = '# '.concat(str).trim().split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join('');
  return str.length > 1 && str.length < 140 ? str : false;
}

console.log(generateHashtag('   '));
console.log(generateHashtag('a b c d'));
console.log(generateHashtag(' a b c d '));