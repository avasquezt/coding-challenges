function encode(text) {
  //Split the text in letters, and get the ascii code of each char in 8 bit binary
  let encoded = text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
  //Repeat each binary digit 3 times and return everything as a string
  encoded = encoded.split('').map(char => `${char}${char}${char}`).join('');
  return encoded;
}

function decode(bits) {
  //Split the binary number in groups of three characters and correct errors (using the average of each group)
  let decoded = bits.match(/.{3}/g).map(n => n.split('').map(Number).reduce((acc, m) => acc + m));
  decoded = decoded.map(n => Math.round(n / 3));
  //After correcting errors, form groups of 8 characters and convert to integer to get the Ascii value
  decoded = decoded.join('').match(/.{8}/g).map(n => parseInt(n, 2));
  //Get the letters and return the decoded string
  return String.fromCharCode(...decoded);
}