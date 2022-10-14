function SeriesSum(n)
{
  return (Array.from(Array(n),(_, i) => 1 / (1 + 3 * i)).reduce((acc, n) => acc + n, 0)).toFixed(2);
}