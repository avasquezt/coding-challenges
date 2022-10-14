function asciiEncrypt(plaintext) {
  return plaintext.split('').map((char, i) => String.fromCharCode(char.charCodeAt(0) + i)).join('');
}
  
function asciiDecrypt(ciphertext) {
  return ciphertext.split('').map((char, i) => String.fromCharCode(char.charCodeAt(0) - i)).join('');
}