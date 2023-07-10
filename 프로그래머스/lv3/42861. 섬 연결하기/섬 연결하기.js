function solution(n, costs) {
    
    // 건설 비용을 기준으로 오름차순 정렬
    costs.sort((a,b)=> a[2]-b[2])
    let answer = 0
    const parent = new Array(n).fill(0).map((_,i)=>i) // [ 0, 1, 2, 3 ]
    console.log(parent)
    
    // 부모 노드를 찾는 함수
    const findParent = (parent,node) => {  // 2 
        
        if(parent[node] === node) {
            return node // 0
        } 
        return findParent(parent,parent[node]) // [0,0,0,3] , 0
    }
    
    // 두 부모 노드를 합치는 함수
    const union = (parent,n1,n2) => {
        const p1 = findParent(parent,n1) // 0
        const p2 = findParent(parent,n2) // 1
        
        p1 < p2 ? parent[p2] = p1 : parent[p1] = p2 // [0,0,0,0]
    }
    
    // 배열을 순회하며 부모가 다르면 다리를 건설 + 부모를 합쳐줌
    costs.forEach(([start,end,cost])=> { // [1,3,1]
        if(findParent(parent,start) !== findParent(parent,end)) { // 0 0
            answer += cost //1 + 2 + 1 
            union(parent, start, end)
        }
    })
    return answer
}