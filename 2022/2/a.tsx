import * as fs from 'fs';

const opponentMap = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
}

const playerMap = {
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
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
  const [opponent, player] = strategy.split(' ');
  console.log(opponent, player)
  const opponentChoice = opponentMap[opponent];
  const playerChoice = playerMap[player];
  const gameResult = gameMap[playerChoice][opponentChoice];
  const score = scores[gameResult];
  totalScore += score;
  totalScore += choiceScores[playerChoice];
})

console.log(totalScore)
