class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
    
    
  }
  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
};

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
};

let pam = new Cat('Pam', 7, 'bored');
console.log(pam.introduce());

let fido = new Dog('Fido', 4, 'energetic', 'Sam');
console.log(fido.introduce());
console.log(fido.greetMaster());
