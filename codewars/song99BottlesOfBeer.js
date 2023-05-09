/**
 * Returns the 99 Bottles of Beer song lyrics as a string array
 * @returns {string[]}
 */
var sing = function () {
    const song = [];
    for(let i = 99; i > 1; i--){
      song.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      song.push(`Take one down and pass it around, ${i - 1} bottle${i > 2 ? 's' : ''} of beer on the wall.`);
    }
    song.push('1 bottle of beer on the wall, 1 bottle of beer.');
    song.push("Take one down and pass it around, no more bottles of beer on the wall.");
    song.push('No more bottles of beer on the wall, no more bottles of beer.');
    song.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    return song;
};