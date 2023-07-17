function solution(n, computers) {
    let network = 0
    const visited = []
    
    const dfs = (i) => { 
        visited[i] = true
        const linked = computers[i] // [1, 1, 0]

         linked.forEach((node,idx)=> { 
             if(!visited[idx] && node === 1) { // 방문하지 않고, 연결되어 있으면 i번째 탐색
                 return dfs(idx)
             }
          })
    }
    
     computers.forEach((computer,i)=> {
         if(!visited[i]) { 
              dfs(i) 
             network++ // dfs를 돌 동안 방문하지 않았으면 network 추가
         }
    })

    return network
}
