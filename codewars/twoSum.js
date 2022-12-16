function twoSum(arr, n){
    let values = {};
    let ans = [];
    for(e of arr){
        if(values[n - e]){
            ans.push([e, n - e]);
        }else{
            values[e] = true;
        }
    }
    return ans;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);