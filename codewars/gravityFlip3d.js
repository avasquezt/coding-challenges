// Bob is bored in his physics lessons yet again, and this time, he's brought a more complex gravity-changing box with him. It's 3D, with small cubes arranged in a matrix of n×m columns. It can change gravity to go in a certain direction, which can be 'L', 'R', 'D', and 'U' (left, right, down, and up).

// Given the initial configuration of the cubes inside of the box as a 2D array, determine how the cubes are arranged after Bob switches the gravity.

// P   d: String, direction -> U, D, L, R
//     a: Array, 2d array representing the positions of the cubes inside the box

// R   Array, arranged positions of the cubes inside the box after the transformation

// E   'R', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]] => [[1, 2, 3], [1, 4, 5], [3, 5, 6], [2, 7, 9]]
//     'L', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]] => [[3, 2, 1], [5, 4, 1], [6, 5, 3], [9, 7, 2]]
//     'U', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]] => [[7, 5, 9], [6, 5, 3], [4, 3, 2], [1, 2, 1]]
//     'D', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]] => [[1, 2, 1], [4, 3, 2], [6, 5, 3], [7, 5, 9]]

// P   In case the direction is horizontal (R, L), order each row in increasing or decreasing order, respectively.
//     In case the direction is vertical (U, D), order each column in decreasing or increasing order, respectively.

function flip(d,a){

    if (d === 'U' || d === 'D'){
        for(let j = 0; j < a[0].length; j++){
            let column = a.map(n => n[j]);
            column.sort((a,b) => d === 'U' ? b - a : a - b)
            for(let i = 0; i < a.length; i++){
                a[i][j] = column[i];
            }
        }
        return a;
    }else{
        return a.map(e => e.sort((a,b) => d === 'R' ? a - b : b - a))
    }
}

console.log(flip('R', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]]));
console.log(flip('L', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]]));
console.log(flip('U', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]]));
console.log(flip('D', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]]));
