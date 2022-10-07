function cutIt(arr){
    let l = Math.min(...arr.map(str => str.length));
    return arr.map(str => str.substr(0, l));
  }