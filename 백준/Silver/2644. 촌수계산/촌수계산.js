const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let people = input[0]

let [n, m] = input[1].split(" ")
const arr = input.slice(3).map((el) => el.split(" ").map(Number))
people = +people
n = +n
m = +m

const solution = (people, start, target, arr) => {
  const graph = Array.from({length: people + 1}).map(() => [])
  const visited = Array.from({length: people + 1}).map(() => false)

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i]
    graph[x].push(y)
    graph[y].push(x)
  }

  const BFS = (start) => {
    const queue = [[start, 0]]

    while (queue.length) {
      let [person, cnt] = queue.shift()
      let nearRelation = graph[person]
      if (!visited[person]) {
        if (person === target) return cnt
        visited[person] = true
      }

      for (let i = 0; i < nearRelation.length; i++) {
        let person = nearRelation[i]
        if (visited[person]) continue
        if (person === target) return cnt + 1
        queue.push([person, cnt + 1])
      }
    }
    return -1
  }

  return BFS(start)
}

const answer = solution(people, n, m, arr)
console.log(answer)
