/**
 * Class with a random property value
 */

class Ghost {
    constructor(){
        this.color = ['white', 'yellow', 'purple', 'red'][Math.round(Math.random() * 3)];
    }
};