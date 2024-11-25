// PROBLEM 1
// function createFruit(name, color) {
//   return {
//     name,
//     color,

//     isRipe() {
//       return `This ${this.name} is ripe.`
//     },

//     describe() {
//       return `This ${this.name} is ${this.color}.`
//     }
//   }
// }

// let apple = createFruit('Apple', 'Red');
// let banana = createFruit('Banana', 'Yellow');

// console.log(apple);
// console.log(banana.isRipe())


// PROBLEM 2
// function createSmartPhone(brand, model, releaseYear) {
//   return {
//     brand,
//     model,
//     releaseYear,

//     checkBatteryLevel() {
//       return `${this.brand} ${this.phone} battery level is 59%`;
//     },

//     displayInfo() {
//       return `${this.releaseYear} ${this.brand} ${this.model}`;
//     }
//   }
// }

// let iphone12 = createSmartPhone('Apple', 'iPhone 12', 2020);
// console.log(iphone12);
// console.log(iphone12.displayInfo())


// PROBLEM 3
function createInstrument(name, type) {
  return {
    name,
    type,

    play() {
      return `We are playing a tune on this ${this.name}.`
    },

    showType() {
      return `This ${this.name} is a ${this.type} instrument.`
    }
  }
}

let violin = createInstrument('violin', 'string');
console.log(violin);
console.log(violin.showType())