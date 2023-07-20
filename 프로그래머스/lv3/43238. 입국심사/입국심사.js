function solution(n, times) {
    //times 오름차순 정렬
    times.sort((a,b)=>a-b)
    
    let min = 1 // 최소 시간
    let max = n * times[times.length-1] // 최대 시간
    let answer = max
    
    while(min <= max) {
       let mid = Math.floor((min+max)/2)
       let cnt = 0
       times.forEach((time)=>{
           cnt += Math.floor(mid/time) // 한 심사대에 몇 명인지
           if(cnt >= n) {
               answer = Math.min(mid,answer)
               return 
           }
       })
        
        if(cnt >= n) {
            max = mid -1
        } else {
            min = mid +1
        }
    }    
    return answer;
}