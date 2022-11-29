function dup(s) {
    return s.map(e => e.replace(/(.)\1+/g, '$1'));
};


function dup(s) {
    return s.map(e => e.split('').reduce((s, char, i) => s += char == s[s.length - 1] ? '' : char, '' ));
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));