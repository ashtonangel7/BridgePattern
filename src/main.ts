import HouseHoldPolicy = require("./HouseHold");
import MotorPolicy = require("./Motor");

import HouseHoldCalculator1 = require("./HouseHoldCalculator1");
import HouseHoldCalculator2 = require("./HouseHoldCalculator2");

import MotorCalculator1 = require("./MotorCalculator1");

let houseHoldCalculator1 = new HouseHoldCalculator1();
let houseHoldCalculator2 = new HouseHoldCalculator2();
let houseHoldPolicy = new HouseHoldPolicy(2);

let motorCalculator1 = new MotorCalculator1();
let motorPolicy = new MotorPolicy(5);

houseHoldPolicy.CalculatePremium(houseHoldCalculator1);
houseHoldPolicy.CalculatePremium(houseHoldCalculator2);

motorPolicy.CalculatePremium(motorCalculator1);