/**
 * Replaces the words in the input sentence with the shortest root
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const dir = {};
    dictionary.forEach(word => add(dir, word));
    
    return sentence.split(' ').map(word => replace(dir, word)).join(' ');
    
    function add(dict, word){
        if(word == ''){
            dict.isEnd = true;
            return;
        }
        if(!dict[word.at(0)]){
            dict[word.at(0)] = {};
        }
        add(dict[word.at(0)], word.slice(1));
    }
    
    function replace(dict, word){
        let n = 0;
        while(dict && n < word.length){
            if(dict.isEnd){
                return word.slice(0, n);
            }
            dict = dict[word.at(n)];
            n++;
        }
        return word;
    }
};