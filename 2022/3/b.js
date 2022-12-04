const fs = require("fs");

let input = fs.readFileSync('input.txt', 'utf8');
input = input.split('\n');

// split every three lines into a single array
let ruckSack = []
for (let i = 0; i < input.length; i += 3) {
  ruckSack.push(input.slice(i, i + 3));
}

let sumOfPriorityValues = 0

// find the common letter in each array
for (const [a, b, c] of ruckSack) {
  const commonLetter = a.split('').find(letter => b.includes(letter) && c.includes(letter));
  let priorityValue = 0;
  if (commonLetter === commonLetter.toLowerCase()) {
    priorityValue = commonLetter.charCodeAt(0) - 96
  } else {
    priorityValue = commonLetter.charCodeAt(0) - 38;
  }
  sumOfPriorityValues += priorityValue;
  console.log(commonLetter, priorityValue, "\n", a,"\n", b,"\n", c, "\n", "\n");

}

console.log(sumOfPriorityValues);