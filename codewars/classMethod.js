/**
 * Class overriding a parent method
 */
class Cat extends Animal {
    speak(){
      return this.name + ' meows.';
    }
}