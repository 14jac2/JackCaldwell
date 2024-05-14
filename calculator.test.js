// Import the functions to test
const {
    CalculateMortgageInsurance,
    CalculateLTT,
    CalculateTotalInterestPaid,
    CalculateSunkCost,
    CalculateRentalCost,
  } = require('./calculator');
  
  // Test CalculateMortgageInsurance function
  test('CalculateMortgageInsurance calculates insurance correctly', () => {
    expect(CalculateMortgageInsurance(400, 1000)).toBeCloseTo(3.6);
  });
  
  // Test1 CalculateLTT function
  test('CalculateLTT calculates land transfer tax correctly test 1', () => {
    expect(CalculateLTT(50000)).toBe(250);
  });

  // Test2 CalculateLTT function
  test('CalculateLTT calculates land transfer tax correctly test 2', () => {
    expect(CalculateLTT(300000)).toBe(2975);
  });

  // Test3 CalculateLTT function
  test('CalculateLTT calculates land transfer tax correctly test 3', () => {
    expect(CalculateLTT(400000)).toBe(4475);
  });
  
  // Test CalculateTotalInterestPaid function
  test('CalculateTotalInterestPaid calculates total interest correctly', () => {
    expect(CalculateTotalInterestPaid(100000, 0, 1053.22, 12, 0, 0, 25)).toBeCloseTo(215967.24);
  });

// Test CalculateTotalInterestPaid function
test('CalculateTotalInterestPaid calculates total interest correctly', () => {
    expect(CalculateTotalInterestPaid(1000000, 0, 5816.05, 5, 0, 0, 25)).toBeCloseTo(744814.96);
    });
      
  // Test CalculateSunkCost function
  test('CalculateSunkCost calculates sunk cost correctly', () => {
    expect(CalculateSunkCost(0, 0, 0, 0, 0, 0)).toBeCloseTo(0);
  });
  
  // Test CalculateRentalCost function
  test('CalculateRentalCost calculates rental cost correctly', () => {
    expect(CalculateRentalCost(0, 0, 0, 0)).toBeCloseTo(0);
  });
  