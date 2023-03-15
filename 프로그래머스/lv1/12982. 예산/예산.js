function solution(d, budget) {
  let sum = 0
  let i = 0
  d.sort((a, b) => a - b)
  while (sum < budget) {
    if (sum + d[i] > budget ||i > d.length - 1 ) return i
    sum += d[i]
    i++
  }
  return i
}