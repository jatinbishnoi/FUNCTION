function calculateTax() {
    // Tax rates based on income ranges
    const taxRates = [
      { range: 10000, rate: 0.1 },
      { range: 30000, rate: 0.15 },
      { range: 70000, rate: 0.2 },
      { range: Infinity, rate: 0.25 }
    ];
  
    // Closure: Inner function with access to the taxRates variable
    return function(income) {
      let tax = 0;
  
      // Calculate tax based on income ranges
      for (const { range, rate } of taxRates) {
        if (income <= range) {
          tax += income * rate;
          break;
        } else {
          tax += range * rate;
          income -= range;
        }
      }
  
      return tax;
    };
  }
  
  // Test the function with various incomes
  const calculateTaxForIncome = calculateTax();
  
  console.log(`Tax for $5,000 income: $${calculateTaxForIncome(5000)}`);
  console.log(`Tax for $20,000 income: $${calculateTaxForIncome(20000)}`);
  console.log(`Tax for $50,000 income: $${calculateTaxForIncome(50000)}`);
  console.log(`Tax for $100,000 income: $${calculateTaxForIncome(100000)}`);
  