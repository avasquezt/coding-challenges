/**
 * Counts the number of occurrences of the input string in the text
 * @param {string} fullText 
 * @param {string} searchText 
 * @returns {number}
 */
function solution(fullText, searchText){
    return fullText.split(searchText).length - 1;
}