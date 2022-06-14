var number=function(array){
  return array.map((str, index) => `${++index}: ${str}`);
}