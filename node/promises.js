const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample() //promise means a piece of code will run in the future
  .then((res) => res + ' World') //triggers a callback when the previous promise finishes
  .then((res) => console.log(res)) 
  .catch((e) => console.log('I am an error ;(')); //displays this when an error happens and the previous line can't run



console.log('hi');