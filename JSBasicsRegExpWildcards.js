function findSimilarity(str,word){
    return str.split(' ').filter(element => new RegExp(`^${word[0] + '.'.repeat(word.length - 2) + word.slice(-1)}$`).test(element)).join(' ');
  }