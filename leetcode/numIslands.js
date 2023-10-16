/**
 * Calculates the number of islands in the input grid
 * @param {character[][]} grid
 * @return {number}
 */

// BFS
var numIslands = function(grid) {
    const visited = new Set();
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            count += bfs(i, j);
        }
    }
    return count;
    
    function bfs(i, j){
        
        if(grid[i][j] == '0') return 0;
        if(visited.has(`${i},${j}`)) return 0;
        
        const queue = new Queue();
        visited.add(`${i},${j}`);
        queue.enqueue([i,j]);
        
        while(!queue.isEmpty()){
            const [x, y] = queue.dequeue();
            // left
            if(grid[x][y - 1] == '1' && !visited.has(`${x},${y - 1}`)){
                visited.add(`${x},${y - 1}`);
                queue.enqueue([x,y - 1]);
            }
            // right
            if(grid[x][y + 1] == '1' && !visited.has(`${x},${y + 1}`)){
                visited.add(`${x},${y + 1}`);
                queue.enqueue([x,y + 1]);
            }
            // up
            if(x && grid[x - 1][ y] == '1' && !visited.has(`${x - 1},${y}`)){
                visited.add(`${x - 1},${y}`);
                queue.enqueue([x - 1,y]);
            }
            // down
            if((x < grid.length - 1) && grid[x + 1][y] == '1' && !visited.has(`${x + 1},${y}`)){
                visited.add(`${x + 1},${y}`);
                queue.enqueue([x + 1,y]);
            }
        }
        return 1;
    }
};

// DFS
var numIslands = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == '1'){
                dfs(i, j, grid.length - 1, grid[0].length - 1);
                count++;
            }
        }
    }
    return count;
    
    function dfs(i,j, m, n){
        
        if(grid[i][j] == '1'){
            grid[i][j] = 0;
            i < m && dfs(i + 1, j, m, n);
            i && dfs(i - 1, j, m, n);
            j < n && dfs(i, j + 1, m, n);
            j && dfs(i, j - 1, m, n);
        }
    }
};