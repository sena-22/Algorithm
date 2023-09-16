const fs = require('fs')
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const visited = Array.from({length: 100000}, () => 0)
const path = Array.from({length: 100000}, () => 0)

const BFS = (n) => {
  const q = []

  q.push([n, 0])
  visited[n] = 1
  while (q.length) {
    const [location, time] = q.shift()
    if (location === k) return time
    for (next of [location - 1, location + 1, location * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        path[next] = location
        visited[next] = 1
        q.push([next, time + 1])
      }
    }
  }
}

const time = BFS(n)
const list = []
list.push(k)
let prev = path[k]

for (let i = 0; i < time; i++) {
  list.push(prev)
  prev = path[prev]
}

console.log(`${time}\n${list.reverse().join(' ')}`)
