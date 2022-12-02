"use strict";
exports.__esModule = true;
var fs = require("fs");
var opponentMap = {
    A: 'rock',
    B: 'paper',
    C: 'scissors'
};
var resultMap = {
    X: 'lose',
    Y: 'draw',
    Z: 'win'
};
var gameMap = {
    rock: {
        rock: 'draw',
        paper: 'lose',
        scissors: 'win'
    },
    paper: {
        rock: 'win',
        paper: 'draw',
        scissors: 'lose'
    },
    scissors: {
        rock: 'lose',
        paper: 'win',
        scissors: 'draw'
    }
};
var scores = {
    win: 6,
    draw: 3,
    lose: 0
};
var choiceScores = {
    rock: 1,
    paper: 2,
    scissors: 3
};
var strategyTxt = fs.readFileSync('./input.txt', 'utf8');
var totalScore = 0;
strategyTxt.split('\n').forEach(function (strategy) {
    var _a = strategy.split(' '), opponent = _a[0], gameResult = _a[1];
    var opponentChoice = opponentMap[opponent];
    var result = resultMap[gameResult];
    var playerChoice = Object.keys(gameMap).find(function (choice) { return gameMap[choice][opponentChoice] === result; });
    var score = scores[result];
    totalScore += score;
    totalScore += choiceScores[playerChoice];
});
console.log(totalScore);
