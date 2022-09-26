function code(s) {
    let n = Math.ceil(Math.sqrt(s.length));
    const re = new RegExp('.{' + n + '}', 'g');
    let str = (s + '\v'.repeat(n ** 2 - s.length)).replace(re, '$&\n').slice(0, -1);
    return rotateCounterClock(str);
}

function decode(s) {
    let str = rotateClock(s);
    return str.replace(/[\v\n]/g, '');
}

function rotateCounterClock(s, arr = s.split('\n')){
    return arr[0].split('').map((_, index) => arr.map(row => row[index]).reverse().join('')).join('\n');
}

function rotateClock(s, arr = s.split('\n')){
    return arr[0].split('').map((_, index) => arr.map(row => row[arr[0].length - 1 -index]).join('')).join('\n');
}

// let str = "I.was.going.fishing.that.morning.at.ten.o'clock";
// let n = Math.ceil(Math.sqrt(str.length));
// const re = new RegExp('.{' + n + '}', 'g')
// str = (str + '\v'.repeat(n ** 2 - str.length)).replace(re, '$&\n').slice(0, -1);
// console.log(str, '\n');

// function rotateCounterClock(s, arr = s.split('\n')){
//     return arr[0].split('').map((_, index) => arr.map(row => row[index]).reverse().join('')).join('\n');
// }

// console.log(rotateCounterClock(str), '\n');
// str = rotateCounterClock(str);

// function rotateClock(s, arr = s.split('\n')){
//     return arr[0].split('').map((_, index) => arr.map(row => row[arr[0].length - 1 -index]).join('')).join('\n');
// }

// console.log(rotateClock(str));
// str = rotateClock(str);

// str = str.replace(/[\v\n]/g, '');

// console.log(str);