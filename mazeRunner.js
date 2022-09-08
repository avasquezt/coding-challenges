// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

//         0 = Safe place to walk
//         1 = Wall
//         2 = Start Point
//         3 = Finish Point

// direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// 4. If you reach the end point before all your moves have gone, you should return Finish.
// 5. If you hit any walls or go outside the maze border, you should return Dead.
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.

// P   2D array of the maze, each element is a number between 0 and 3
//     Array of Strings, path to follow, the strings can be: 'N', 'W', 'S', 'E'

// R   String, "Finish", "Dead" or "Lost"

// E   var maze = [[1,1,1,1,1,1,1],
            //     [1,0,0,0,0,0,3],
            //     [1,0,1,0,1,0,1],
            //     [0,0,1,0,0,0,1],
            //     [1,0,1,0,1,0,1],
            //     [1,0,0,0,0,0,1],
            //     [1,2,1,0,1,0,1]];

//     ["N","N","N","N","N","E","E","E","E","E"] => "Finish"
//     ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"] => "Finish"
//     ["N","N","N","N","N","E","E","E","E","E","W","W"] => "Finish"
//     ["N","N","N","W","W"] => "Dead"
//     ["N","N","N","N","N","E","E","S","S","S","S","S","S"] => "Dead"
//     ["N","E","E","E","E"] => "Lost"

// S   Find the starting point in the array (the position with number 2), position (y, x);
//     Loop through the directions array, moving the current position:
//     N: (-1, 0)
//     W: (0,1)
//     S: (1,0)
//     E: (0,-1)
//     Check if the current position is a wall or the end:
//     if maze(current_position) = 1 -> return "Dead"
//     if maze(current_position) = 3 -> return "Finish"
//     If this conditions are not meet, keep going. If the conditions are never met, return 'Lost'


function mazeRunner(maze, directions) {
    let currenPosition = findElement(maze, 2);
    let moves = {
        N: [-1, 0],
        W: [0, -1],
        S: [1, 0],
        E: [0, 1]
    }
    for(let i = 0; i < directions.length; i++){
        currenPosition[0] += moves[directions[i]][0];
        currenPosition[1] += moves[directions[i]][1];
        // Check if out of bounds
        if (currenPosition[0] < 0 || currenPosition[0] >= maze.length || currenPosition[1] < 0 || currenPosition[1] >= maze.length){
            return 'Dead';
        // Check if hit a wall
        }else if(maze[currenPosition[0]][currenPosition[1]] == 1){
            return 'Dead';
        // Check if it's the end of the maze
        }else if(maze[currenPosition[0]][currenPosition[1]] == 3){
            return 'Finish';
        }
    }
    // If didn't reach the end
    return 'Lost';
}

function findElement(maze, element){
    for(let i = 0; i < maze.length; i++){
        for (let j = 0; j < maze[0].length; j++){
            if(maze[i][j] == element) return [i, j];
        }
    }
} 

var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E"]));
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]));
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E","W","W"]));
console.log(mazeRunner(maze, ["N","N","N","W","W"]));
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]));
console.log(mazeRunner(maze, ["N","E","E","E","E"]));