function showBits (n) {
  return (n >>> 0).toString(2).padStart(32, '0').split('').map(Number);
}

