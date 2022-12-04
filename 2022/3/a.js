const fs = require("fs");

const input = fs.readFileSync('input.txt', 'utf8');

const ruckSack = input.split('\n')
  .map(line => {
    // split line by half length
    const half = line.length / 2;
    const left = line.slice(0, half);
    const right = line.slice(half);
    return { left, right };
  })

let sumOfPriorityValues = 0
for (const { left, right } of ruckSack) {
  // find all the letters which are in both left and right
  let commonLetter = left.split('').find(letter => right.includes(letter));
  // unique the letters

  // letter from a-z have values 1-26
  // letter from A-Z have values 27-52
  // so we can use the letter value as the weight
  
  if (commonLetter === commonLetter.toLowerCase()) {
    sumOfPriorityValues += commonLetter.charCodeAt(0) - 96;
  } else {
    sumOfPriorityValues += commonLetter.charCodeAt(0) - 38;
  }
}

console.log(sumOfPriorityValues);