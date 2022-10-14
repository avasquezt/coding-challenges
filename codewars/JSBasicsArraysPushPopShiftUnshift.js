function infiniteLoop(arr,d,n){
    for(let j = 0; j < n; j++){
        for(let i = 0; i < arr.length; i++){
            if(d === 'right'){
                arr[(i + 1) % arr.length].unshift(arr[i].pop());
            }else if(d == 'left'){
                arr[(arr.length + (i - 1)) % arr.length].push(arr[i].shift());
            }
        }
    }
    return arr;
}


  console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"left",1))
  console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"right",1))

// function infiniteLoop(arr,d,n){
//     var len = arr.length;
//     while(n--){
//       for(var i=0;i<len;i++){
//         if(d === "left") arr[i].push( arr[(i+1)%len].shift() ) 
//         if(d === "right") arr[(i+1)%len].unshift( arr[i].pop() );
//       }
//     }
//     return arr;
// }  