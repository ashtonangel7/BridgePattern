import Policy = require("./Policy");

interface IPremiumCalculator {
    CalculatePremium(policy: Policy): void;
}

export = IPremiumCalculator;