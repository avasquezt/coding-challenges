function findMaxRange(ranges){
  const max = Math.max(...ranges.map(range => getRange(range)));
  return ranges.filter((range,index) => getRange(range) === max)
}

function getRange(str){
  return Math.abs(Number(str.split(' ')[3] - str.split(' ')[1]))
}