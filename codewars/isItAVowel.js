/**
 * Checks if the string is a vowel
 * @returns {boolean}
 */
String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this);
};