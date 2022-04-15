const magNumber = info => Math.ceil(info[1]*3 /({PT92: 17, M4A1: 30, M16A2:30, PSG1:5})[info[0]])

console.log(magNumber(["PT92", 6]));
console.log(magNumber(["M4A1", 8]));
console.log(magNumber(["M16A2", 19]));