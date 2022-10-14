function sortByArea(array) {
  return array.slice().sort((a, b)=> area(a) - area(b));
}

function area(dimensions){
  if (Array.isArray(dimensions)){
    return (dimensions[0] * dimensions[1]) || 0;
  }else{
    return Math.PI * (dimensions ** 2);
  }
}