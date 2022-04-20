function htmlspecialchars(formData) {
  return formData.split('').map(char => ({'<':'&lt;', '>':'&gt;', '"':'&quot;','&':'&amp;'})[char] || char).join('')
}

function htmlspecialchars(formData) {
  return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
}