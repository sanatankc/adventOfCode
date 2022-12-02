"use strict";
exports.__esModule = true;
var fs = require("fs");
var elvesFoodTxt = fs.readFileSync('./elvesFood.txt', 'utf8');
var elvesFood = elvesFoodTxt.split('\n\n').map(function (food) { return food.split('\n'); });
// add all the food
var totalFoodPerElf = elvesFood.map(function (elfFood) { return elfFood.reduce(function (acc, food) { return acc + Number(food); }, 0); });
// find the max food
var maxFood = Math.max.apply(Math, totalFoodPerElf);
console.log(maxFood);
