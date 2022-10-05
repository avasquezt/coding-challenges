function isSortedAndHow(array) {
    let isOrdered = true, order = 0;
    for(let i = 1, tmp = array[0]; i < array.length; i++){
      if(Math.sign(array[i] - tmp) != order && Math.sign(array[i] - tmp) != 0 && order){
        isOrdered = false;
        break;
      }
      order = Math.sign(array[i] - tmp) || order;
    }
    return isOrdered ? `yes, ${order > 0 ? 'ascending' : 'descending'}` : 'no'
  }