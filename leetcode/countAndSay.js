/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    function countElements(str){
        let count =[];
        for(let i = 0; i < str.length; i++){
            if(str[i] == str[i-1]){
                count[count.length - 1][1] += 1;
            }else{
                count.push([str[i], 1])
            }
        }
        return count;
    }

    function countToText(arr){
        return arr.flatMap(n => `${n[1]}${n[0]}`).join('');
    }

    let digits = ['1', '1'];
    for (let i = 2; i <= n; i++){
        digits[i] = countToText(countElements(digits[i - 1]));
    }

    return digits[n];
};

console.log(countAndSay(4))