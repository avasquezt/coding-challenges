/**
 * Class for a game where the user has to guess the correct number
 */
class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(this.lives){
        if(this.number == n) return true;
        this.lives--;
        return false;
      };
      throw new Error();
    }
  }