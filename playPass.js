function playPass(s, n) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let ans = s.replace(/[a-z0-9]/gi, (match, i, string) => {
      let char = String(isNaN(match) ? letters[(26 + ((letters.indexOf(match.toLowerCase()) + n) % 26)) % 26] : 9 - match);
      return i % 2 ? char.toLowerCase() : char.toUpperCase();
    })
    return ans.split('').reverse().join('');
  }