function code(strng) {
  return strng.split('').map(char => Number(char).toString(2)).map(n => '0'.repeat(n.length - 1) + '1' + n).join('');
}
function decode(str) {
let ans = '';
while (str.length > 0){
  let padding = str.match(/0*1{1}/)[0].length;
  ans += parseInt(Number(str.slice(padding, padding * 2)), 2);
  str = str.slice(padding * 2);
}
return ans;
}