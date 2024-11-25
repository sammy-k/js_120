// PROBLEM 1
// class SmartPhone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }

//   checkBatteryLevel() {
//     return `${this.brand} ${this.model} battery level is 75%`;
//   }

//   displayInfo() {
//     return `${this.releaseYear} ${this.brand} ${this.model}`;
//   }
// }

// let iphone12 = new SmartPhone('Apple', 'iPhone12', 2020);
// console.log(iphone12, iphone12.displayInfo())


// PROBLEM 2
// class Dog {};

// let beagle = new Dog();
// console.log(beagle instanceof Dog)


// PROBLEM 3
class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    return `accelerating`;
  }

  decelerate() {
    return `decelerating`;
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    return `honking`;
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    return `dropping anchor`;
  }
}
class Plane extends Vehicle {
  constructor(color, weight, airlineName) {
    super(color, weight);
    this.airlineName = airlineName;
  }

  takeOff() {
    return `taking off`;
  }

  land() {
    return `landing`;
  }
}

let audiQ5 = new Car('Black', 2500, '4E5GH89')
console.log(audiQ5, audiQ5.honk())


// PROBLEM 4
console.log(audiQ5 instanceof Vehicle, audiQ5 instanceof Car);