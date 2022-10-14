function doubleChar(str) {
  let result = [...str]
  result.forEach((string, index, arr) => arr[index]+=string)
  return result.join('')
}

// const doubleChar = (str) => str.split("").map(c => c + c).join("");