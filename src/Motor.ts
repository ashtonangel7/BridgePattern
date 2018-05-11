import Policy = require("./Policy");
import IPremiumCalculator = require("./IPremiumCalculator");

class Motor extends Policy {
    constructor(multiplier: number) {
        super(multiplier);
    }
    CalculatePremium(premiumCalculator: IPremiumCalculator): void {
        premiumCalculator.CalculatePremium(this);
    }
}

export = Motor;