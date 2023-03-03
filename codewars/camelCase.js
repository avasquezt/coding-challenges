/** 
 * Converts the input string case to CamelCase
*/

String.prototype.camelCase=function(){
    return this.replace(/(^| )\w/g, char => char.trim().toUpperCase())
}

String.prototype.camelCase=function(){
    return this.replace(/(^| )(\w)/g, (_, $1, $2) => $2.toUpperCase())
}

console.log("this test".camelCase());