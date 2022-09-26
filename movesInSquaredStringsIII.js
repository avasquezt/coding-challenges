function rot90Clock(strng, arr = strng.split('\n')) {
    return arr[0].split('').map((_, index) => arr.map(row => row[index]).reverse().join('')).join('\n');
}
function diag1Sym(strng, arr = strng.split('\n')) {
    return arr[0].split('').map((_, index) => arr.map(row => row[index]).join('')).join('\n');
}
function selfieAndDiag1(strng, arr = strng.split('\n')) {
    return arr[0].split('').map((str, index) => arr[index] + '|' + arr.map(row => row[index]).join('')).join('\n');
}
function oper(fct, s) {
    return fct(s);
}


// let arr = [
//     "abc",
//     "def",
//     "ghi",
// ];
    
// console.log(diag_1_sym(arr).join('\n'));
// console.log(arr[0].split('').forEach((row, i) => console.log(arr.map(row => row[--arr[0].length - i]))))
// console.log(rot90Clock(arr).join('\n'));