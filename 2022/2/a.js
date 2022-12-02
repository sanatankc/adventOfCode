"use strict";
exports.__esModule = true;
var fs = require("fs");
var opponentMap = {
    A: 'rock',
    B: 'paper',
    C: 'scissors'
};
var playerMap = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors'
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
    var _a = strategy.split(' '), opponent = _a[0], player = _a[1];
    console.log(opponent, player);
    var opponentChoice = opponentMap[opponent];
    var playerChoice = playerMap[player];
    var gameResult = gameMap[playerChoice][opponentChoice];
    var score = scores[gameResult];
    totalScore += score;
    totalScore += choiceScores[playerChoice];
});
console.log(totalScore);
