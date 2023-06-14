function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

/**
 * Add function to class using the prototype
 * @returns {string}
 */
Dog.prototype.bark = function(){
  return 'Woof';
}