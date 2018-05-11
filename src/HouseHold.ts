import Policy = require("./Policy");
import IPremiumCalculator = require("./IPremiumCalculator");

class HouseHold extends Policy {
    constructor(multiplier: number) {
        super(multiplier);
    }
    CalculatePremium(premiumCalculator: IPremiumCalculator): void {
        premiumCalculator.CalculatePremium(this);
    }
}

export = HouseHold;