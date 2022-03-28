var countSheep = function (num){
  // return (Array(num)).reduce((acc, str, index) => acc + `${index} sheep...`, '')
  let str = '';
  for (let i = 1; i <= num; i++){
    str += `${i} sheep...`;
  }
  return str;
}

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
const countSheep = length =>Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
