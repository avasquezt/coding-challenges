function range(start = 0, end, step = 1) {
  if (end == undefined){
    [start, end] = [0, start];
  }
  let length = end > start ? end - start : 0;
  return Array.from(Array(Math.ceil(length / (step > 0 ? step : 1))), (_, i) => start + (i * step));
}