function correctPolishLetters (string) {
  return string.replace(/ą|ć|ę|ł|ń|ó|ś|ź|ż/g, char => ({ą:'a',ć:'c',ę:'e',ł:'l',ń:'n',ó:'o',ś:'s',ź:'z',ż:'z'}[char]))
}