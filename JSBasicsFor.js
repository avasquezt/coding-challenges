function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
      [even, odd][arr[i] % 2].push(arr[i]);
    }
    return [odd,even];
  }