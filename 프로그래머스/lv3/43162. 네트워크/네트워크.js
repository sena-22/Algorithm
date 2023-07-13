function solution(n, computers) {
    let network = 0
    const visited =[]
    
    const dfs = (i) => { 
        visited[i] = true
        const linked = computers[i] // [1, 1, 0]
         linked.forEach((node,idx)=> {
             if(!visited[idx] && node === 1) {
                 return dfs(idx)
             }
          })
    }
    
     computers.forEach((computer,i)=> {
         if(!visited[i]) {
              dfs(i) 
             network++
         }
    })

    return network
}
