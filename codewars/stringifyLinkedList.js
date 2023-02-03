/**
 * Returns a string representation of the input linked list
 * @param {Node} list 
 * @returns {string}
 */
function stringify(list) {
    let ans = '';
    while(list){
        ans += list.data + ' -> ';
        list = list.next;
    }
    return ans + 'null';
}