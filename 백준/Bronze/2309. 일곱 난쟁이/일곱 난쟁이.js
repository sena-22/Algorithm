const fs = require("fs");
const readFileSyncAddress = "/dev/stdin";
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const n = input.map((el) => parseInt(el));

const solution = (n) => {
  let fake = n.reduce((acc, cur) => acc + cur) - 100;
  let answer = [];

  for (let i = 0; i < n.length - 1; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] === fake) {
        answer = n.filter((n, idx) => idx !== i && idx !== j);
        break;
      }
    }
  }
  return answer.sort((a, b) => a - b).join("\n");
};

//제출
const answer = solution(n);
console.log(answer);
