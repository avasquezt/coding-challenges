function robberEncode(sentence) {
  return sentence.replace(/[a-zA-Z]/g, ch => 'BCDFGHJKLMNPQRSTVWXYZ'.includes(ch) ? ch + 'O' + ch : 'bcdfghjklmnpqrstvwxyz'.includes(ch) ? ch + 'o' + ch : ch);
}