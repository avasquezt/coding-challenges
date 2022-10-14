// console.log("   _( )__ _( )__ _( )__\n _|     _|     _|     _|\n(_   _ (_   _ (_   _ (_\n |__( )_|__( )_|__( )_|\n |_     |_     |_     |_\n  _) _   _) _   _) _   _)\n |__( )_|__( )_|__( )_|")


// ans = '  '+' _( )__'.repeat(3)
// for (let i = 0; i < 4; i++){
//     ans += (i % 2) ? '\n |_' + '     |_'.repeat(3) + '\n' + '  _)' + ' _   _)'.repeat(3) : '\n _|' + '     _|'.repeat(3) + '\n' + '(_'+ '   _ (_'.repeat(3);
//     ans += '\n' + ' |'+ '__( )_|'.repeat(3);
// }
// console.log(ans);

function puzzleTiles(width, height){
	ans = '  '+' _( )__'.repeat(width)
    for (let i = 0; i < height; i++){
        ans += (i % 2) ? '\n |_' + '     |_'.repeat(width) + '\n' + '  _)' + ' _   _)'.repeat(width) : '\n _|' + '     _|'.repeat(width) + '\n' + '(_'+ '   _ (_'.repeat(width);
        ans += '\n' + ' |'+ '__( )_|'.repeat(width);
    }
    return ans;
}

console.log(puzzleTiles(3,4))
console.log(puzzleTiles(1,1))
