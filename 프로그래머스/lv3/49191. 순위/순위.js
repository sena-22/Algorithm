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
    // 1을 거쳐가는 경우
    // 2->3
    // 2->1->3
    for(const k of range) { // k = 거쳐가는 노드
        for(const a of range) { // i = 출발 노드
            for(const b of range) { // j = 도착 노드 
                // console.log(k,a,b, graph[a][k], graph[k][b])
                if(graph[a][k] === 1 && graph[k][b] === 1) graph[a][b] = 1
                if(graph[a][k] === -1 && graph[k][b] === -1) graph[a][b] = -1
            }
        }
    }
    
    console.log(graph)
    
    for (const i of range) { //[1,2,3,4,5]
        let isF = false
        for(const j of range) { //[1,2,3,4,5]
            if(graph[i][j] === false) {
                isF = true
                break
            }
        }
        count += isF ? 0 : 1;
    }
    
    return count
}