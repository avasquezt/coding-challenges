var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};


/**
 * Creates a complete binary tree from the input array
 * @param {*} array 
 * @param {*} i 
 * @returns 
 */
function arrayToTree(array, i = 0) {
    return array[i] != undefined ? new TreeNode(array[i], arrayToTree(array, 2 * i + 1), arrayToTree(array, 2 * i + 2)) : undefined;
};


