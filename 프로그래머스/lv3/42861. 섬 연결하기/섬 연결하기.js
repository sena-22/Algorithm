function solution(n, costs) {
    // 건설 비용을 기준으로 오름차순 정렬
    let answer = 0
    costs.sort((a,b)=>a[2]-b[2]) 
    const parent = new Array(n).fill(0).map((_, i) => i); // [0,1,2,3]
    console.log(costs)

    // 부모 노드를 찾는 함수
    const findParent = (parent, node) => { // [0,1,2,3], 0
        if(parent[node]===node) { 
            return node
        }
        return findParent(parent,parent[node])
    }
    
    // 두 부모 노드를 합치는 함수
    const union = (parent,n1,n2) => { // [0,1,2,3], 0, 1
        const p1 = findParent(parent,n1) // 0
        const p2 = findParent(parent,n2) // 1     
       p1 < p2 ? parent[p2] = p1 : parent[p1] = p2 // parent[0,0,2,3]
    }

   for (let i=0;i<costs.length;i++) {
        if(findParent(parent,costs[i][0]) !== findParent(parent,costs[i][1])) { // i번째 노드의 0번째와 1번째의 부모가 다르면
            answer+= costs[i][2] // 부모가 다르면 다리를 건설한다
            union(parent,costs[i][0],costs[i][1])  // 부모를 합쳐준다         
        }
    }   
    return answer
}