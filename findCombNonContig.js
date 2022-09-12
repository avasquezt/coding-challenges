// You are given a certain array of positive and negative integers which elements occur only once (all of them different from 0), a certain number known as target, t, t ≠ 0, and a number k, k > 0.

// You should find the amount of combinations, which numbers are not contiguous elements of the given array and which sums (adding up their numbers) are in the range [t - k, t + k] (extremes included)

// P   a: Array, numbers to sum
//     t: Number, sum target
//     k: Number, tolerable difference

// R   n: number, total number of combinations in the array producing the target sum

// E   [-4, 2, 1, 6, 4, -3, -1], 5, 2 => 11
//     [-4, 2, 1, 6, 4, -3, -1], -30, 3 => 0
//     [1, 2, 3, 4, 5, 6, 7, -7, -6, -5, -4, -3, -2, -1], -18, 3 => 3
//     [-17, -13, 55, 26, 11, 12, 37, -34], 24, 3 => 5
//     [11, -11, -48, 40, -4, 52, -36, 47, 27, 23, 8, 26], -12, 3 => 14
//     [-41, 44, 28, -58, -30, -4, -29, 51], 0, 3 => 2
//     [52, 18, -11, -58, 44, -20, -60, 25, -44, -18, 58, 30, -37, -3, 29, 37], -1, 3 => 95
//     [-59, -46, -38, 11, -43, -53, -25, -55, -29, 9, 14, 45, -28, 19, -41, 25], -2, 3 => 63
//     [-10, -9, -8, 41, -46, -3, 25, 2, 8, 40, 53, -51, 19, 54, -57, -11, 26, 27, -2, 17], 11, 3 => 662
// P   For each element in the Array, 


// function findCombNonContig(a,t,k){
//     let ans = []//, min = t - k, max = t + k;
//     for(let i = 0; i < a.length; i++){
//         let aux = [a[i]];
//         for(let j = i + 2; j < a.length; j+=2){
//             for(let n in aux){
//                 let total = aux[n] + a[j];
//                 aux.push([aux[n],a[j]]);
//             }
//         }
//         for(let j = i + 3; j < a.length; j+=2){
//             for(let n in aux){
//                 let total = aux[n] + a[j];
//                 aux.push([aux[n],a[j]]);
//             }
//         }
//         ans = ans.concat(aux);
//     }
//     return ans//.filter(n => n >= min && n <= max);
// }

function findCombNonContig(a,t,k){
    let max = t + k, min = t - k;
    let sums = [a[0]], tmp = [a[1]]
    for(let i = 0, curr=[]; i < a.length - 2; i++){
            for(let j = 0; j < sums.length; j++){
                curr.push(a[i + 2] + sums[j]);
            }
            curr.push(a[i + 2]);
            sums = sums.concat(tmp);
            tmp = curr;
            curr = [];
        }    
    return sums.concat(tmp).filter(n => n >= min && n <= max).length;
}

// console.log(findCombNonContig([2, 3, 4, 5, 6, 7, 8]));
console.log(findCombNonContig([-4, 2, 1, 6, 4, -3, -1], 5, 2));
console.log(findCombNonContig([-4, 2, 1, 6, 4, -3, -1], -30, 3));
console.log(findCombNonContig([1, 2, 3, 4, 5, 6, 7, -7, -6, -5, -4, -3, -2, -1], -18, 3));
console.log(findCombNonContig([-17, -13, 55, 26, 11, 12, 37, -34], 24, 3));
console.log(findCombNonContig([11, -11, -48, 40, -4, 52, -36, 47, 27, 23, 8, 26], -12, 3));
console.log(findCombNonContig([-41, 44, 28, -58, -30, -4, -29, 51], 0, 3));
console.log(findCombNonContig([-10, -9, -8, 41, -46, -3, 25, 2, 8, 40, 53, -51, 19, 54, -57, -11, 26, 27, -2, 17], 11, 3));