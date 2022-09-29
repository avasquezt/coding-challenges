function binaryToString(binary) {
    return (binary.match(/.{8}/g) || []).map(e => String.fromCharCode(parseInt(e, 2))).join('');
  }