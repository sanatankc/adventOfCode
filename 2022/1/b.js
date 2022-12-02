"use strict";
exports.__esModule = true;
var fs = require("fs");
var elvesFoodTxt = fs.readFileSync('./elvesFood.txt', 'utf8');
var elvesFood = elvesFoodTxt.split('\n\n').map(function (food) { return food.split('\n'); });
// add all the food
var totalFoodPerElf = elvesFood.map(function (elfFood) { return elfFood.reduce(function (acc, food) { return acc + Number(food); }, 0); });
// find the max top 3 food
var maxFoodTop3 = totalFoodPerElf.sort(function (a, b) { return b - a; }).slice(0, 3).reduce(function (acc, food) { return acc + food; }, 0);
console.log(maxFoodTop3);
