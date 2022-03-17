function noSpace(x){
  return Array.from(x).filter(x => x.trim()).join("")
}

x = "absc 32"
console.log(noSpace(x))