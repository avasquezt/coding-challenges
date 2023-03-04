/**
 * Replaces the vowels in the input string for similar looking numbers
 * @param {string} txt 
 * @returns {stringº}
 */
function nerdify(txt){
    const dictionary = {a:4, e:3, l:1};
    return txt.replace(/[aAeEl]/g, char => dictionary[char.toLowerCase()]);
}