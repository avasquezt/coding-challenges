function XO(str) {
    let count = {x:0, o:0}
    for (let char of str.toLowerCase()){
      if(char in count) count[char] += 1;
    }
    return count['x'] == count['o'];
  }