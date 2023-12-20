function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Test the function with different inputs
  console.log(`Factorial of 0: ${factorial(0)}`);
  console.log(`Factorial of 1: ${factorial(1)}`);
  console.log(`Factorial of 5: ${factorial(5)}`);
  console.log(`Factorial of 10: ${factorial(10)}`);
  