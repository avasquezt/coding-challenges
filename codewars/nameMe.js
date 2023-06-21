/**
 * Creates an object with the input names
 * @param {string} first 
 * @param {string} last 
 */
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}