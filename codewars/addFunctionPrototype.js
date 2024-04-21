function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}

/**
 * Function added with the object prototype
 * @returns {string}
 */
Dog.prototype.bark = () => 'Woof!';