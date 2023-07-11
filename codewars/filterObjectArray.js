/**
 * Filters the input array based on the requested value
 * @param {object[]} list 
 * @param {string} lang 
 * @returns {object[]}
 */
function findAdmin(list, lang) {
  return list.filter(({language, githubAdmin}) => language == lang && githubAdmin == 'yes');
}
