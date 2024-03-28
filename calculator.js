function CalculateMortgageInsurance(downPayment, houseValue) {
    let downPaymentPercent = (downPayment / houseValue) * 100;
    let insuranceRate;
    if (downPaymentPercent < 10) {
        insuranceRate = 0.04;
    } else if (downPaymentPercent < 15) {
        insuranceRate = 0.031;
    } else if (downPaymentPercent < 20) {
        insuranceRate = 0.028;
    } else if (downPaymentPercent < 25) {
        insuranceRate = 0.024;
    } else if (downPaymentPercent < 30) {
        insuranceRate = 0.017;
    } else {
        insuranceRate = 0.006;
    }
    let insurance = insuranceRate * (houseValue - downPayment);
    return insurance;
}

function CalculateLTT(value) {
    let tax = 0;
    remainder = value - 55000;
    if (remainder < 0) {
        tax = value * 0.005;
    } else {
        tax = 275;
        if ((remainder - 195000) < 0) {
            tax = tax + remainder * 0.01;
        } else {
            tax = tax + 1950;
            remainder = remainder - 195000;
            if ((remainder - 250000) < 0) {
                tax = tax + remainder * 0.015;
            } else {
                tax = tax + 3750;
                remainder = remainder - 250000;
                if ((remainder - 1600000) < 0) {
                    tax = tax + remainder * 0.02;
                } else {
                    tax = tax + 32000;
                    remainder = remainder - 1600000;
                    tax = tax + remainder * 0.025;
                }
            }
        }
    }
    return tax;
}

function CalculateTotalInterestPaid(houseValue, downPayment, mortgagePayment, mortgageRate, mortgageInsurance, landTransferTax, holdPeriod){
    let totalInterest = 0;
    let interest;
    let principle = (houseValue - downPayment) + mortgageInsurance + landTransferTax;
    for (let i = 1; i <= holdPeriod; i++) {
        if(principle > 0){
            interest = principle * (mortgageRate / 100);
            principle = principle - ((12 * mortgagePayment) - interest);
            totalInterest = totalInterest + interest;
        }
    }
    return totalInterest;
}

function CalculateSunkCost(downPayment, mortgageRate, mortgagePayment, houseValue, propertyTaxRate, holdPeriod) {
    // Mortgage insurance
    let mortgageInsurance = CalculateMortgageInsurance(downPayment, houseValue);

    let landTransferTax = CalculateLTT(houseValue);

    // Calculate interest
    let totalInterest = CalculateTotalInterestPaid(houseValue, downPayment, mortgagePayment, mortgageRate, mortgageInsurance, landTransferTax, holdPeriod);

    // Calculate maintenance fees
    let totalMaintenance = (0.03 * houseValue) * holdPeriod;

    // Calculate tax
    let totalPropertyTax = holdPeriod * ((propertyTaxRate / 100) * houseValue);

    // Add it all together
    let sunkCost = totalInterest + totalPropertyTax + totalMaintenance + mortgageInsurance + landTransferTax;

    return sunkCost;
}

function CalculateRentalCost(rentalRate, holdPeriod, downPayment, mortgageRate)
{
    let rentCost = rentalRate * 12 * holdPeriod;
    let investmentGains = 0;
    let interest = 0;
    for (let i = 1; i <= holdPeriod; i++) {
        interest = (downPayment + investmentGains) * (mortgageRate / 100)
        investmentGains = investmentGains + interest;
    }
    let rentalSunkCost = rentCost - investmentGains;
    return rentalSunkCost;
}

module.exports = {
    CalculateMortgageInsurance,
    CalculateLTT,
    CalculateTotalInterestPaid,
    CalculateSunkCost,
    CalculateRentalCost,
  };