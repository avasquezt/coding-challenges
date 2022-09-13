function arrange(s) {
    let t = [], pos = [0, (s.length - 1)], inc=[1, -1];
    for (let i = 0; i < s.length; i++){
      t.push(s[pos[0]]);
      pos = [pos[0] + inc[0], pos[1]];
      if(i % 2 == 0){
        pos.reverse();
        inc.reverse();
      }
    }
    return t;
  }

console.log(arrange([1,2]));
console.log(arrange([4, 3, 2]));
console.log(arrange([2, 4, 3, 4]));
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]));