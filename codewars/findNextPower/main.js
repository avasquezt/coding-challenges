function findNextPower(val, pow_) { 
  return Math.ceil(val ** (1 / pow_)) ** pow_;
}