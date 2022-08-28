function countingValleys(s) {
    console.log(s.split('').map(char => ({U: 1, D: -1}[char]) || 0))
    return s.split('').map(char => ({U: 1, D: -1}[char]) || 0).reduce((acc, n) => [acc[0] + n, acc[1] + (((acc[0] === 0 && n === -1) || (acc[0] === -1 && n === 1)) ? 1 : 0)], [0, 0])[1];
  }

console.log(countingValleys('DUFFUUDDDDDUUU'));