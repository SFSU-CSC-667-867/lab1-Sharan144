// Declaring with the function keyword


function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const myArrow = (y) => y + 1;
//this is the same as the line above:
// {
//    return y + 1;
// }
console.log(myArrow(8));



// make a function that returns a function
const functionFactory = () => () => console.log('This is weird');
const a = functionFactory(); //a is now the return value of functionFactory which is the arrow function!
a();
const anotherFunction = functionFactory;
anotherFunction()();