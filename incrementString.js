function incrementString (strng) {
    // return incrementedString
    return strng.replace(/(\d+|.)$/, n => isNaN(n) ? n + 1 : String(Number(n) + 1).padStart(n.length, 0)) || '1';
}

console.log(incrementString('foo0049'));
console.log(incrementString('foo'));