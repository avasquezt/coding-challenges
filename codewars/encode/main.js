function encode(str,  n)
{
  return str.split('').map((char,i) => char.charCodeAt(0) - 96 + String(n).split('').map(Number)[i % n.toString().length]);
}
