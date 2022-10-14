function sc(words){
    let seen = {};
    return words.toLowerCase().replace(/[^a-z ]/g, '').split(' ').reduce((acc, word) => [acc += (seen[word] ? 1 : word.length), seen[word] = true][0],0);
}