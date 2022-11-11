function spoonerize(words) {
    let result = [];
    words = words.split(' ');
    for(let i = 0; i < words.length / 2; i++){
      [result[i], result[words.length - i - 1]] = [words[words.length - i - 1][0] + words[i].slice(1), words[i][0] + words[words.length - i - 1].slice(1)]
    }
    return result.join(' ')
  }