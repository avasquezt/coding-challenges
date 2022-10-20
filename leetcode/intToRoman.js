var intToRoman = function(num) {
    let romans = new Map([  [1000,'M'],
                            [900,'CM'],
                            [500,'D'],
                            [400,'CD'],
                            [100,'C'],
                            [90,'XC'],
                            [50,'L'],
                            [40,'XL'],
                            [10,'X'],
                            [9,'IX'],
                            [5, 'V'],
                            [4, 'IV'],
                            [1, 'I']
                        ]);
    let ans = '';
    for(let [key, val] of romans){
        while(num >= key){
            ans += val;
            num -= key;
        }
    }
    return ans;
};

console.log(intToRoman(3));
console.log(intToRoman(7));
console.log(intToRoman(12));
console.log(intToRoman(22));
console.log(intToRoman(27));
console.log(intToRoman(58));
console.log(intToRoman(1998));