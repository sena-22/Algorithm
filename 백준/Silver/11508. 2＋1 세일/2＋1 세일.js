const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const [n, ...prices] = input

  function solution(n, prices) {
    let price = 0

    let sortedPrices = prices.map((el) => Number(el)).sort((a, b) => b - a)

    for (let i = 0; i < n; i++) {
      if ((i + 1) % 3 === 0) continue
      price += sortedPrices[i]
    }
    return price
  }

  const answer = solution(n, prices)
  console.log(answer)

  process.exit()
})
