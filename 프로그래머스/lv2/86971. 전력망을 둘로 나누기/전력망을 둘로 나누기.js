function solution(n, wires) {
    
    let min = 99
    const tree = Array.from({length: n + 1}, () => []);
    
    wires.forEach(([a,b])=> {
        tree[a].push(b)
        tree[b].push(a)
    })
    
    const bfs = (tree,root,excepted) => {
        const visited = new Array(tree.length).fill(false)
        const q = [root] 
        let count =0
        
        while(q.length) {
            const  node = q.shift() 
            visited[node] = true
  
            for(const el of tree[node]) { 
                 if(el !== excepted && visited[el] === false ) { 
                    q.push(el)
                 }
            }
            count++
        }
        return count
    }

    wires.forEach(([a,b])=> {
        min = Math.min(min, Math.abs(bfs(tree,a,b) -  bfs(tree,b,a)))
    })
    
    return min 
}

