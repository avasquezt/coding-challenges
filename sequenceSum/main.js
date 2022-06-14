const sequenceSum = (begin, end, step) => {
  const n = Math.floor( (end - begin) / step) + 1 || 0;
  return begin < end ? begin * n + step * ( n * ( n - 1 ) / 2 ) : 0;
};