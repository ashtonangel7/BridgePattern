import IPremiumCalculator = require("./IPremiumCalculator");

abstract class Policy {

    private readonly _multiplier: number;
    protected _premiumCalculator: IPremiumCalculator;

    constructor(multiplier: number) {
        this._multiplier = multiplier;
    }
    CalculatePremium(premiumCalculator: IPremiumCalculator): void {  }
}

export = Policy;