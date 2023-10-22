/**
 * Calculates the distance of each cell in the input matrix to the nearest 0
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const n = mat.length, m=mat[0].length;
    const queue = new Queue();
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(mat[i][j] == 0) queue.push([i, j]);
            else mat[i][j] = -1;
        }
    }
    const INC = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    while(!queue.isEmpty()){
        const [i, j] = queue.pop();
        for(let [x, y] of INC){
            x += i, y += j;
            if(x < 0 || y < 0 || x >= n || y >= m || mat[x][y] != -1) continue;
            mat[x][y] = 1 + mat[i][j];
            queue.push([x, y]);
        }
    }
    return mat;
};