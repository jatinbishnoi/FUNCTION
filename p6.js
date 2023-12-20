function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function(...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  }
  
  // Test the curry function with a function that adds two numbers
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2,3)); // Outputs 5
  console.log(curriedAdd(5, 7)); // Outputs 12
  console.log(curriedAdd(2,3,4)); // Outputs 9
  