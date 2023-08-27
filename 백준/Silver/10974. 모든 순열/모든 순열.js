const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const n = parseInt(fs.readFileSync(readFileSyncAddress).toString().trim().split('\n'))

const result = []
const visited = new Array(n + 1).fill(false)

const dfs = (arr) => {
  if (arr.length === n) {
    return result.push([...arr])
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true
      arr.push(i)
      dfs(arr)
      arr.pop()
      visited[i] = false
    }
  }
}

dfs([])
result.forEach((row) => {
  console.log(row.join(' '))
})
