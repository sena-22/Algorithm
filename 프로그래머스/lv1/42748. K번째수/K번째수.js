const solution = (array, commands) => {
  return commands.map(([i,j,k]) => {
    let newArr = array.slice(i - 1, j)
    return newArr.sort((a, b) => a - b)[k - 1]
  })
}