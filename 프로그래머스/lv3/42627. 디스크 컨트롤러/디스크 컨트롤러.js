function solution(jobs) {
    
   jobs.sort((a,b)=>a[0]- b[0]) // 시작 시간을 기준으로 오름차순 정렬
    let answer = 0, job = 0, time = 0, leng = jobs.length
    
    const priorityQueue = []
    
    while(job<leng || priorityQueue.length !== 0) { // 작업이 남아있고 우선순위 큐가 비어있지 않으면
         if( job < leng && time >= jobs[job][0]) { // 작업이 남아 있고 요청되었으면 
             priorityQueue.push(jobs[job++]) // 해당 작업을 넣고 job을 1 올려줌
             // console.log(priorityQueue)
             priorityQueue.sort((a,b)=> a[1]-b[1]) // 소요시간 기준으로 오름차순 정렬
             continue
        }

        if(priorityQueue.length !== 0) { // 큐가 비어있지 않으면
            time += priorityQueue[0][1] // 큐의 첫 번째 작업시간 추가
            answer += time - priorityQueue[0][0] // 소요시간 추가(현재시간-요청시간)
            // console.log('time:',time)
            // console.log('answer:',answer)
            
            priorityQueue.shift() // 해당 작업 제거
        } else { // 큐가 비어있으면
            time = jobs[job][0]
        }
    }
    
    return parseInt(answer/leng)
}