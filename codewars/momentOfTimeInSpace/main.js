function momentOfTimeInSpace(moment) {
  const time = moment.replace(/[^1-9]/g, '').split('').map(Number).reduce((acc, n) => acc + n, 0);
  const space = moment.replace(/[1-9]/g, '').length;
  const arr = Array(3).fill(false)
  arr[Math.sign(time -  space) + 1] = true;
  return arr;
}

// return [space > time, space == time, space < time]