function findMissingLetter(array)
{
  return String.fromCharCode(array.slice(1).reduce((acc, char, i) => ((char.charCodeAt(0) === array[i].charCodeAt(0) + 1) ? acc : char.charCodeAt(0) - 1), 0));
}