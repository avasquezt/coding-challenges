/**
 * Swaps the tail of each string in the input array
 * @param {string[]} arr 
 * @returns {string[]}
 */
function tailSwap(arr) {
    return arr.map((e, i) => {
      let s = e.split(':');
      return s[0] + ':' + arr[(i + 1) % 2].split(':')[1];
    });
}

function tailSwap(arr) {
    const [aa, ab] = arr[0].split(":")
    const [ba, bb] = arr[1].split(":")
    return [`${aa}:${bb}`, `${ba}:${ab}`]
}