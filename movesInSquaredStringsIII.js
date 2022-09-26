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

// function diag_1_sym(s){
//     return s[0].split('').map((_, i) => s.map(row => row[i]));
// }

// function diag_2_sym(s){
// return s[0].split('').map((_, i) => s.map(row => row[s[0].length - 1 - i]).reverse());
// }

// console.log(diag_2_sym(arr).join('\n'));
// console.log(arr[0].split('').forEach((row, i) => console.log(arr.map(row => row[--arr[0].length - i]))))