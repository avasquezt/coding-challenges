function rndCode(){
    let code = '';
    for (let i = 0; i < 2; i++) code += rndChar('ABCDEFGHIJKLM');
    for (let i = 0; i < 4; i++) code += rndnum(0,9);
    for (let i = 0; i < 2; i++) code += rndChar('~!@#$%^&*');
    
    return code;
    
  }
  
  function rndnum(from,to){
    return ~~((to-from)*Math.random()+from);
  }
  
  function rndLetter(){
    return String.fromCharCode(rndnum(65,90));
  }
  
  function rndChar(chars){
    return chars[rndnum(0,chars.length)];
  }

let str=''
for(let i = 0; i < 20; i++) str+=rndLetter();
console.log(str)