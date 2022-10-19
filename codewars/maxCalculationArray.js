function sc(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++){
        result.push(array[i] + array[j]);
        result.push(array[i] - array[j]);
        result.push(array[j] - array[i]);
        result.push(array[i] * array[j]);
        if (array[j]) result.push(array[i] / array[j]);
        if (array[i]) result.push(array[j] / array[i]);
      }
    }
    return Math.max(...result);
  }