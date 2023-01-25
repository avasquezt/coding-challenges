/**
 * Vigenère cipher class
 * @param {string} key 
 * @param {string} abc 
 */

function VigenèreCipher(key, abc) {
    this.abc = abc;
    this.key = key.split('').map(char => abc.indexOf(char));

    /**
     * Encodes the input message
     * @param {string} str 
     * @returns {string}
     */
    this.encode = function (str) {
        let msg = '';
        for(let i = 0; i < str.length; i++){
          if(abc.includes(str[i])){
            const encodedCharCode = this.abc.indexOf(str[i]) + this.key[i % this.key.length];
            msg += this.abc[encodedCharCode % this.abc.length];
          }else{
            msg += str[i];
          }
        }
        return msg;
      };
      
    /**
     * Decodes the input encoded message
     * @param {string} str 
     * @returns {string}
     */
    this.decode = function (str) {
        let msg = '';
        for(let i = 0; i < str.length; i++){
            if(abc.includes(str[i])){
                const decodedCharCode = this.abc.indexOf(str[i]) - this.key[i % this.key.length];
                msg += this.abc[(decodedCharCode + this.abc.length) % this.abc.length];
            }else{
                msg += str[i];
            }
        }
        return msg;
    };
}  