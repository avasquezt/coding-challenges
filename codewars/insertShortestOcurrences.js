function sc(str,chars){
    let ans = str;
    chars.forEach(char => {
          let pos = [], ocurrences=[];
          for(let i = 0; i < ans.length; i++){
              if(ans[i] == char){
                  if(pos[pos.length - 1] == i - ocurrences[ocurrences.length - 1]){
                      ocurrences[ocurrences.length - 1]++;
                  }else{
                      pos.push(i);
                      ocurrences.push(1);
                  }
              }
          }
          let minIndex = pos.length ? pos[ocurrences.indexOf(Math.min(...ocurrences))] : ans.length;
          ans = ans.slice(0, minIndex) + char + ans.slice(minIndex);
    })
    return ans;
  }

console.log(sc("xxyx",["x"]));
console.log(sc("xyx",["x"]));
console.log(sc("abababab",["b"]));
console.log(sc("abababab",["c"]));