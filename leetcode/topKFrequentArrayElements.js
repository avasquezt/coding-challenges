/**
 * Finds the k most frequent elements in the input array
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {3
    const count = {};
    for(const n of nums){
        count[n] = 1 + (count[n] || 0);
    }
    return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0,k).map(e => e[0]);
};

var topKFrequent = function(nums, k) {3
    const count = {};
    for(const n of nums){
        count[n] = 1 + (count[n] || 0);
    }
    
    const bucket = [];
    for(const [n, c] of Object.entries(count)){
        if(!bucket[c]) bucket[c] = [];
        bucket[c].push(n);
    }
    const res = [];
    for(let i = bucket.length; i >= 0 && res.length < k; i--){
        if(bucket[i] != null) res.push(...bucket[i]);
    }
    return res;
};