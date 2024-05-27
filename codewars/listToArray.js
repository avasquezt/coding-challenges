/**
 * Converts a list to an array
 * @param {LinkedList} list 
 * @returns {any[]}
 */
function listToArray(list) {
    if(!list) return [];
    return [list.value].concat(listToArray(list.next));
}