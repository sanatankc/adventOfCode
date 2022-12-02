import * as fs from 'fs';

const opponentMap = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
}

const resultMap = {
  X: 'lose',
  Y: 'draw',
  Z: 'win',
}

const gameMap = {
  rock: {
    rock: 'draw',
    paper: 'lose',
    scissors: 'win',
  },
  paper: {
    rock: 'win',
    paper: 'draw',
    scissors: 'lose',
  },
  scissors: {
    rock: 'lose',
    paper: 'win',
    scissors: 'draw',
  },
}

const scores = {
  win: 6,
  draw: 3,
  lose: 0,
}

const choiceScores = {
  rock: 1,
  paper: 2,
  scissors: 3,
}

const strategyTxt = fs.readFileSync('./input.txt', 'utf8');

let totalScore = 0

strategyTxt.split('\n').forEach((strategy) => {
  const [opponent, gameResult] = strategy.split(' ');
  const opponentChoice = opponentMap[opponent];
  const result = resultMap[gameResult];
  const playerChoice = Object.keys(gameMap).find((choice) => gameMap[choice][opponentChoice] === result);
  const score = scores[result];
  totalScore += score;
  totalScore += choiceScores[playerChoice];
})

console.log(totalScore)
