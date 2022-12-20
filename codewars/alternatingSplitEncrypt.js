function encrypt(text, n) {
    if(!text) return text;
    for(let i = 0; i < n; i++){
      text = text.split('').reduce((acc, char, i) => [ acc[0] = acc[0] + (i % 2 ? char : ''), acc[1] = acc[1] + (i % 2 ? '': char), acc][2], ['', '']).join('');
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if(!encryptedText) return encryptedText;
    for(let i = 0; i < n; i++){
      const odds = encryptedText.slice(0, encryptedText.length / 2);
      const evens = encryptedText.slice(encryptedText.length / 2);
      encryptedText = '';
      for(let j = 0; j < evens.length; j++){
        encryptedText += evens[j] + (odds[j] || '');
      }
    }
    return encryptedText;
  }