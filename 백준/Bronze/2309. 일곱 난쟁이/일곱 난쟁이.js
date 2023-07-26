const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input.map((el) => parseInt(el))

const solution = (n) => {
  const fake = n.reduce((acc, cur) => acc + cur, 0) - 100
  let answer = []

  for (let i = 0; i < n.length - 1; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[i] + n[j] === fake) {
        answer = n.filter((_, idx) => idx !== i && idx !== j)
      }
    }
  }
  return answer.sort((a, b) => a - b).join('\n')
}

const answer = solution(n)
console.log(answer)
