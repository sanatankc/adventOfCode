import * as fs from 'fs';

const elvesFoodTxt = fs.readFileSync('./elvesFood.txt', 'utf8');
const elvesFood = elvesFoodTxt.split('\n\n').map((food) => food.split('\n'));
// add all the food
const totalFoodPerElf = elvesFood.map((elfFood) => elfFood.reduce((acc, food) => acc + Number(food), 0));

// find the max top 3 food
const maxFoodTop3 = totalFoodPerElf.sort((a, b) => b - a).slice(0, 3).reduce((acc, food) => acc + food, 0);
console.log(maxFoodTop3)
