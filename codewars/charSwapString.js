/**
 * Decodes the input string by swapping the exchanged chars
 * @param {string} str 
 * @returns {string}
 */
function decipherThis(str) {
    return str.split(' ').map(word => 
        word.replace(/\d+/, e => String.fromCharCode(e))
            .replace(/(\w)(\w)(.*)(\w)$/, "$1$4$3$2")
        ).join(' ');
};

const decipherThis = str => str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);