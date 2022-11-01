function stringTransformer(str) {
    return str.split(' ').map(word => word.split('').map((char, i) => char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')).reverse().join(' ');
  }