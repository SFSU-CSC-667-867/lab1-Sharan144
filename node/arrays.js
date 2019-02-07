// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const arrayTest = [9, 3, 4];
// arrayTest[5] = 9;
console.log(arrayTest);
arrayTest.forEach((n) => {
    console.log(n);
});


// use map
const newArray = arrayTest.map(i => i + 1); //so the output used to be 9,3,4 but now it is 10,4,5
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);


// use push
newArray.push(6);
console.log(newArray);


// use shift
newArray.shift();
console.log(newArray);


// use unshift
newArray.unshift(5);
console.log(newArray);

// use filter