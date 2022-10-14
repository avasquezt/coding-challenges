function topSecret(str){
    return str.split(' ').map(
        str => str.split('').map(i =>
            i.replace(/[a-z]/i, char => String.fromCharCode(i.charCodeAt() + ((i.charCodeAt() < 100 && i.charCodeAt() > 96) ? 23 : (i.charCodeAt() < 68) ? 23 : -3)))
        )
        .join('')
    ).join(' ');
}

console.log(topSecret('abcABC'));
console.log(topSecret('Pb qdph lv Mrkq'));
console.log(topSecret('wklv lv dq hadpsoh'));
console.log(topSecret('Khoor Zruog!'));

// const topSecret = str =>
//   str.replace(/[a-z]/gi, val => String.fromCharCode(val.charCodeAt() + (`ABCabc`.includes(val) ? 23 : -3)));