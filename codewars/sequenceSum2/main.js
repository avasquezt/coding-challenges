const sequenceSum = (begin, end, step) => {
  if(end > begin && step < 0 || end < begin && step > 0){
    return 0;
  }
  const n = Math.floor( (end - begin) / step) + 1 || 0;
  return begin * n + step * ( n * ( n - 1 ) / 2 );
};