//preload variable: dict

/**
 * Transforms the given string to a backronym, using the preloaded dictionary
 * @param {string} string 
 * @returns {string}
 */
var makeBackronym = function(string){
  return string.split('').map(char => dict[char.toUpperCase()]).join(' ');
};