function getAverage(marks){
  return Math.floor(marks.reduce((acc, mark) => acc + mark, 0) / marks.length);
}