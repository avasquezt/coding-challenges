function dontGiveMeFive(start, end)
{
 let count = 0;
  for (let i = start; i <= end; i++){
    if (!/5/g.test(String(i))) count++;
  }
  return count;
}