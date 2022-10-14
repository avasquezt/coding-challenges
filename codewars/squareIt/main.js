function squareIt(int) {
  const n = Math.sqrt(String(int).length);
	if(n % 1 === 0){
    let arr = [];
    for(let i = 0; i < n; i++){
      arr.push(String(int).slice(i * n, (i + 1) * n)) ;
      console.log(arr);
    }
    return arr.join('\n');
  } 
  return 'Not a perfect square!';
}