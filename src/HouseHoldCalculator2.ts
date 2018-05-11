import IPremiumCalculator = require("./IPremiumCalculator");

class HouseHoldPremiumCalculator2 implements IPremiumCalculator {
    CalculatePremium(): void {
        console.log("Hello Household calculator 2");   
    }
}

export = HouseHoldPremiumCalculator2;