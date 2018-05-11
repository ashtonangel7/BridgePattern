import IPremiumCalculator = require("./IPremiumCalculator");
import Policy = require("./Policy");

class HouseHoldPremiumCalculator1 implements IPremiumCalculator {
    CalculatePremium(policy: Policy): void {
        console.log("Hello Household calculator 1");   
    }
}

export = HouseHoldPremiumCalculator1;