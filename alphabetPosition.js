function alphabetPosition(text) {
    return text.replace(/[^a-z]/gi,'').toLowerCase().split('').map(char => char.charCodeAt(0) - 96).join(' ');
  }