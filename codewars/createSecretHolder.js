/**
 * Returns a secret object with the input value
 * @param {number} secret 
 * @returns {object}
 */
function createSecretHolder(secret) {
    return {
      val: secret,
      getSecret(){
        return this.val
      },
      setSecret(n){
        this.val = n;
      }
    }
}