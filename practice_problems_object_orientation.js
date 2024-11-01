// PROBLEM 1

function createHardware(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price
  }
}


let scissors = createHardware(0, 'Scissors', 8, 10);
console.log(scissors);