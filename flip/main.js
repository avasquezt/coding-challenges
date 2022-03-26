const flip=(d, a)=>{
  if (d.toLowerCase() == 'r'){
    a = a.sort((a, b) => a - b);
  }else if(d.toLowerCase() == 'l'){
    a= a.sort((a, b) => b - a);
  }
  return a
}