//P : m int, +
//R : return array [n, i], 
//    n: last number checked
//    i: Numbers of checks


function seven(m, i = 0) {
  //S:
  console.log(m);
  if (m.toString().length > 2 /*|| (m.toString().length === 2 && m % 7 !== 0)/*/){ 
     m =  Math.floor(m / 10) - (m % 10 * 2);
    console.log(m)
     return seven(m, ++i)
  }else{
    return [m, i]
  }
}

//E: 
console.log(seven(1021)); //[10, 2]
console.log(seven(1603)); //[7, 2]