function sortMyString(S) {
  return S.split('').reduce((acc, char, n) => {
    acc[n % 2] += char;
    return acc;
  }, [[''],['']]).join(' ');
}