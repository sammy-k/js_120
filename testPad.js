let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

let obj2 = {
  a: 'goodbye',
  b: 'world'
}


function myFunc(word1, word2) {
  console.log(`${word1} ${word2}!`)
}

console.log(myFunc.prototype)

let bindedFunc = myFunc.bind(obj, obj.a, obj.b)
bindedFunc.call(obj2, obj2.a, obj2.b)

// console.log(obj.hasOwnProperty('a'))