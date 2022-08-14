function count (string) { 
  // return Array.from(new Set(string)).reduce((ans, char) => {
  //   ans[char] = string.split(char).length - 1;
  //   return ans;
  //   }, {});;
  return string.split('').reduce((ans, char) => {ans[char] = (ans[char] + 1) || 1;return ans}, {});
}

console.log(count('aaab'));