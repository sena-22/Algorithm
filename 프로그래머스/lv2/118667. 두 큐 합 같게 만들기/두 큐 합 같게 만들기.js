function solution(queue1, queue2) {
    let answer = 0;
    let count = queue1.length + (queue2.length*1.2)

    let q1T =0
    let q2T = 0
    
    for(let i=0;i<queue1.length;i++) {
        q1T += queue1[i]
    }
    
   for(let i=0;i<queue2.length;i++) {
        q2T += queue2[i]
    }
    
    if (q1T+q2T % 2 === 1) return -1
    
    let idx1 = 0
    let idx2 = 0
    
    while(q1T !== q2T) {
        if (answer > count) return -1
        
         if(q1T > q2T) {
           queue2.push(queue1[idx1])
           q1T -= queue1[idx1]
           q2T += queue1[idx1]  
            idx1++
           answer++
         } 
        
        if(q1T < q2T) {
           queue1.push(queue2[idx2])
           q1T += queue2[idx2]
           q2T -= queue2[idx2] 
            idx2++
           answer++
        }
}
      
    return answer;
}