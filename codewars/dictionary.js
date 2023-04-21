/**
 * Dictionary Class that stores words to and their definitions
 */
class Dictionary {
    constructor() {
      this.data = {};
    }
    
    newEntry(key, value) {
      this.data[key] = value;
    }
    
    look(key) {
      return this.data[key] || `Can't find entry for ${key}`;
    }

}