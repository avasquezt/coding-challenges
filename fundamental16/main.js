function validatePIN (pin) {
  return /^[0-9]*$/.test(pin) && (pin.length === 4 || pin.length === 6)
}

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

console.log(validatePIN("12355"))
