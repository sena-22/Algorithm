function solution(n, results) {
    let count = 0
    
    const graph = Array.from({length:n+1},()=>Array(n+1).fill(false))
    results.forEach(([win,lose])=> {
        graph[win][lose] = 1
        graph[lose][win] = -1
        graph[win][win] = 0
        graph[lose][lose] = 0
    })
    const range = [...Array(n).keys()].map(e=>e+1) // [1,2,3,4,5]
    
    // 플로이드 와샬
    for(const mid of range) {
        for(const a of range) {
            for(const b of range) {
                if(graph[a][mid] === 1 && graph[mid][b] === 1) graph[a][b] = 1
                if(graph[a][mid] === -1 && graph[mid][b] === -1) graph[a][b] = -1
            }
        }
    }
    
    for (const i of range) {
        let hasF = false
        for(const j of range) {
            if(graph[i][j] === false) {
                hasF = true
                break
            }
        }
        count += hasF ? 0 : 1;
    }
    
    return count
}