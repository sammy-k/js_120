class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, wheels = 4) {
    super(make, model, wheels)
  }
}

// class Motorcycle extends Vehicle {
//   constructor(make, model, wheels = 2) {
//     super(make, model, wheels)
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model, 6)
//     this.payload = payload;
//   }
// }

let myCar = new Car('Audi', 'Q5');
console.log(myCar.getWheels())
console.log(myCar.info())