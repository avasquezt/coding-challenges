function chuckPushUps(string) {
  return typeof (string || null)  === 'string' ? Math.max(...string.replace(/[^01 ]/g, '').trim().split(/ +/).map(n => parseInt(n,2))) || 'CHUCK SMASH!!' : 'FAIL!!';
}