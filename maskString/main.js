// return masked string
function maskify(cc) {
  return (cc.length > 4 ? '#'.repeat(cc.length - 4) : '') + cc.slice(-4);
}

cc = '12234'
console.log(cc.slice(-4).padStart(cc.length, '#'))