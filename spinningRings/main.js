function spinningRings(innerMax, outerMax, n = 1) {
  return (((innerMax + 1) - (n % (innerMax + 1) )) % (innerMax + 1) ) === (n % (outerMax + 1)) ? n : spinningRings(innerMax, outerMax, ++n);
};