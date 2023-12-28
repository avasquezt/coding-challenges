/**
 * Checks if there are two numbers in the input array with a difference of valueDiff and a distance of indexDiff
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= i + indexDiff; j++) {
            let diff = Math.abs(nums[i] - nums[j]);
            if (diff <= valueDiff) {
                return true; 
            }
        }
    }
    return false;
}


/**
 * With BST
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let bst = null;
    let isValid = false;
    for(let i = 0; i < nums.length; i++){
        
        [bst, isValid] = add(bst, nums[i], valueDiff);
        
        if(isValid) return true;
        
        if(i >= indexDiff){
            bst = remove(bst, nums[i - indexDiff]);
        }
        
    }
    return false;
};

function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function add(node, val, valueDiff){
    let isValid = false;
    if(node){
        if(val <= node.val){
            [node.left, isValid] = add(node.left, val, valueDiff);
        }else{
            [node.right, isValid] = add(node.right, val, valueDiff);
        }
        isValid = isValid || Math.abs(node.val - val) <= valueDiff;
    }else{
        node = new TreeNode(val);
    }
    return [node, isValid];
}

function remove(node, val){
    if(node){
        if(node.val == val){
            if(node.left && node.right){
                let curr = node.right;
                while(curr.left){
                    curr = curr.left;
                }
                node.right = remove(node.right, curr.val);
                node.val = curr.val;
            }else{
                return node.left || node.right;
            }
        }else if(val < node.val){
            node.left = remove(node.left, val);            
        }else{
            node.right = remove(node.right, val)
        }
    }
    return node;
}