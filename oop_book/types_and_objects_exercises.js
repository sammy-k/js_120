// Problem 1
// let cessna152 = {
//   fuelCapacityInGallons: 24.5,
//   cruisingSpeedInKnots: 111,

//   takeOff: function() {
//     console.log(`The plane is taking off.`);
//   },

//   land: function() {
//     console.log(`The plane is landing.`)
//   }
// }

// console.log(cessna152.takeOff())

// // state: fuel capacity and cruising speed
// // behavior: take off and land


// PROBLEM 2
// function Book(title, author, yearPublished) {
//   this.title = title;
//   this.author = author;
//   this.yearPublished = yearPublished;
// }

// let neuromancer = new Book('Neuromancer',	'William Gibson', 1984);
// let doomsdayBook = new Book('Doomsday Book',	'Connie Willis', 1992);

// console.log(doomsdayBook);

// // objects created: instances of Book constructor
// // constructor function: Book
// // instance objects: neuromancer, doomsdayBook


// PROBLEM 3
// function Album(title, artist, releaseYear) {
//   this.title = title;
//   this.artist = artist;
//   this.releaseYear = releaseYear;
// }

// let thriller = new Album('Thriller',	'Michael Jackson', 1982);
// let darkSideOfTheMoon = new Album('The Dark Side of the Moon',	'Pink Floyd', 1973);

// console.log(darkSideOfTheMoon)


// PROBLEM 4
function SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.batteryLevel = function() {
    console.log('Your phone has 50% battery remaining.');
  };

  this.info = function() {
    console.log(`This ${this.brand} ${this.model} was released in ${this.releaseYear}.`)
  }
}

let iphone12 = new SmartPhone('Apple', 'iPhone 12', 2020);
console.log(iphone12.info())