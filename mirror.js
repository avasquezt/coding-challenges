function mirror(text){
    text = text.split(' ');
    let length = Math.max(...text.map(word => word.length));
    text = text.map(word => word.split('').reverse().join('').padEnd(length, ' '));
    return `${'*'.repeat(length + 4)}\n* ${text.join(' *\n* ')} *\n${'*'.repeat(length + 4)}`
}

console.log(mirror('Hello World'));
console.log(mirror('Codewars'));