function solution(elements) {

    const set = new Set()
    const n = elements.length
    
    for(let i=1;i<=n; i++) {   // 부분 수열 개수 1,2,3,4
        let sum = 0
        
        for(let j=0;j<n;j++) { // 시작 위치 순회 0,1,2,3,4
            if(j === 0) { // 첫 요소인 경우 그냥 더해주기
                for(let k=0;k<i;k++) { 
                    sum+=elements[k]
                }
            } else {
                sum -= elements[j-1] // 이전 요소 제거
                sum += elements[(j+i-1) % n] 
            }
                set.add(sum)
          }
   }
     return set.size
}

    