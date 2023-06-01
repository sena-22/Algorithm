const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0]
const guests = input.slice(1)

function solution(n, guests) {
  guests.sort((a, b) => b - a)

  let totalTip = 0

  for (let i = 0; i < n; i++) {
    let tip = guests[i] - i

    if (tip > 0) {
      totalTip += tip
    }
  }
  return totalTip
}

const answer = solution(n, guests)
console.log(answer)
