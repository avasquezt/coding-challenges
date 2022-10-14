function getMiddle(s)
{
  var middle = Math.floor(s.length/2)
  return s.length % 2 == 0 ? s.slice(middle - 1, middle + 1) : s[middle];
}

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }