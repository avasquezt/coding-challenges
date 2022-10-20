function sc(arr){
    let ocurrences = new Map();
    for(let i = 0; i < arr.length; i++){
      arr[i].forEach(n => ocurrences.set(n, ocurrences.get(n) + 1 || 1));
    };
    let max = Math.max(...ocurrences.values());
    let mostCommon = [...ocurrences.keys()].filter(n => ocurrences.get(n) == max);
    return arr.map(n => n.filter(e => !mostCommon.includes(e)));
}

console.log(sc([[3,3,3,3,3,3,3,3,3]]));
console.log(sc([[3,3,3,3,3,3,3,3,3,4,5]]));
console.log(sc([[3,4,5],[3,4,5]]));
console.log(sc([[3,4,5],[4,4,4]]));