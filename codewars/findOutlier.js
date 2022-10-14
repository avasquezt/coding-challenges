function findOutlier(integers){
    console.log(integers);
    acc = Math.abs(integers [0] % 2) + Math.abs(integers[1] % 2);
    if (acc == 1){
      if(Math.abs(integers[2] % 2) == Math.abs(integers[1] % 2)) return integers[0];
      else return integers[1];
    }
    for(let i = 2; i < integers.length ;i++){
      acc += Math.abs(integers[i] % 2);
      if((acc / (i + 1)) % 1 != 0) return integers[i];
    }
  }

//   function findOutlier(integers){
//     return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
//   }
//   function even(num){
//     return (num % 2 == 0);
//   }
//   function odd(num){
//     return !even(num)
//   }