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
  
  // Test CalculateLTT function
  test('CalculateLTT calculates land transfer tax correctly', () => {
    expect(CalculateLTT(50000)).toBe(250);
  });
  
  // Test CalculateTotalInterestPaid function
  test('CalculateTotalInterestPaid calculates total interest correctly', () => {
    expect(CalculateTotalInterestPaid(0, 0, 0, 0, 0, 0)).toBeCloseTo(0);
  });
  
  // Test CalculateSunkCost function
  test('CalculateSunkCost calculates sunk cost correctly', () => {
    expect(CalculateSunkCost(0, 0, 0, 0, 0, 0)).toBeCloseTo(0);
  });
  
  // Test CalculateRentalCost function
  test('CalculateRentalCost calculates rental cost correctly', () => {
    expect(CalculateRentalCost(0, 0, 0, 0)).toBeCloseTo(0);
  });
  