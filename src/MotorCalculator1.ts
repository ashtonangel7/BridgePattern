import IPremiumCalculator = require("./IPremiumCalculator");
import Policy = require("./Policy");

class MotorCalculator1 implements IPremiumCalculator {
    CalculatePremium(policy: Policy): void {
        console.log("Hello Motor calculator 1");   
    }
}

export = MotorCalculator1;