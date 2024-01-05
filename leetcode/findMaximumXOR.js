/**
 * Calculates the maximum result of XOR between two elements in the input array
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let root = Array(2);
    let max = 0;
    for(const e of nums){
        let cur = root;
        let sum = 0;
        root = add(root, e);
        for(let i = 31; i >= 0; i--){
            const n = (e >>> i) & 1;
            if(cur[n ^ 1]){
                sum += 1 << i;
                cur = cur[n ^ 1];
            }else{
                cur = cur[n];
            }
        }
        max = Math.max(max, sum);
    }
    return max;
    
    function add(node, number){
        let cur = node;
        for(let i = 31; i >= 0; i--){
            const n = (number >>> i) & 1;
            if(!cur[n]){
                cur[n] = Array(2);
            }
            cur = cur[n];
        }
        return node;
    }
};

// Using set and bit manipulation
var findMaximumXOR = function(nums) {
    let max = 0;
    let mask = 0;
    for(let i = 31; i >= 0; i--){
        mask = mask | (1 << i);
        const set = new Set();
        for(const n of nums){
            set.add(n & mask);
        }
        const tmp = max | (1 << i);
        for(const prefix of set){
            if(set.has(tmp ^ prefix)){
                max = tmp;
                break;
            }
        }
    }
    return max;
};