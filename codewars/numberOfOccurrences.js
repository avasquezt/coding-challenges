Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    /**
     * Returns the number of ocurrences of the input element in the array
     * @param {number} element 
     * @returns {number}
     */
    value : function numberOfOccurrences(element) {
      return this.filter(n => n === element).length;
    }
});