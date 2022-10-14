const dic = {
  G:'A',
  A:'G',
  D:'E',
  E:'D',
  R:'Y',
  Y:'R',
  P:'O',
  O:'P',
  L:'U',
  U:'L',
  K:'I',
  I:'K',
  g:'a',
  a:'g',
  d:'e',
  e:'d',
  r:'y',
  y:'r',
  p:'o',
  o:'p',
  l:'u',
  u:'l',
  k:'i',
  i:'k'
}

function encode(str) 
{
    return str.replace(/[gaderypolukiGADERYPOLUKI]/g, char => dic[char]);   
}

function decode(str) 
{
    return str.replace(/[gaderypolukiGADERYPOLUKI]/g, char => dic[char]);   
}