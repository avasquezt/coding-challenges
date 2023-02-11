function Sleigh() {}

/**
 * Checks if the input name and password are correct
 * @param {string} name 
 * @param {string} password 
 * @returns {boolean}
 */
Sleigh.prototype.authenticate = function(name, password) {
  return name == 'Santa Claus' && password == 'Ho Ho Ho!';
};