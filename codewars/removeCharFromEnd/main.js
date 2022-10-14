function remove (string) {  
  return string.slice(-1) === '!' ? remove(string.slice(0,-1)) : string;
}