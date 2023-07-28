function solution(n, edge) {
    
    const graph = Array.from({length:n+1}, () => [])
    
     edge.forEach(([s,e]) => {
        graph[s].push(e)
        graph[e].push(s)
    })

    const visited = [0,1]
    const q = [1] 

    while(q.length) {
        const cur = q.shift()  
        
        for(const next of graph[cur]) {
            if(!visited[next]) {
                visited[next] = visited[cur]+1 
                q.push(next) 
            }
        }
    }
    
    const max = Math.max(...visited)

    return visited.filter(e=>e===max).length
}