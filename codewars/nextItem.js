/**
 * Returns the item immediately following the item specified
 * @param {Iterable} xs 
 * @param {any} item 
 * @returns {any}
 */
function nextItem(xs, item) {
    const iter = xs[Symbol.iterator]();
    let n = iter.next();
    while(!n.done){
        if(n.value == item) return iter.next().value;
        n = iter.next();
    }
    return undefined;
}