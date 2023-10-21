/**
 * Fills the selected color in the input image
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    dfs(image, sr, sc, image[sr][sc], color)
    return image;
    
    function dfs(image, x, y, starting, color){
        if(x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] !== starting || image[x][y] === color) return;
        image[x][y] = color;
        dfs(image, x - 1, y, starting, color);
        dfs(image, x + 1, y, starting, color);
        dfs(image, x, y - 1, starting, color);
        dfs(image, x, y + 1, starting, color);
    }
};