function giveChange(amount) {
  return [ amount % 5, Math.floor((amount % 10) / 5), Math.floor((amount % 50 % 20) / 10), Math.floor((amount % 50) / 20), Math.floor((amount % 100) / 50), Math.floor(amount / 100) ]
}