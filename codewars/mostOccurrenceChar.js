let mostOccurrenceChar = function(str){
    let ocurrences = {'':0};
    let max = '';
    for(char of str){
        ocurrences[char] = 1 + (ocurrences[char] || 0);
        if(ocurrences[char] > ocurrences[max]){
            max = char;
        }
    }
    return max;
}

console.log(mostOccurrenceChar('Hello World!'));