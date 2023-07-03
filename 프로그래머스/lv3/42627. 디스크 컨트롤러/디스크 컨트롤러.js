function solution(jobs) {
    
   jobs.sort((a,b)=>a[0]- b[0]) // 시작 시간을 기준으로 오름차순 정렬
    let answer = 0, job = 0, time = 0, leng = jobs.length // job = 실행된 작업 time = 현재 시간 
    //job = 3
    //time = 3 + 6 = 9 + 9 = 18
    // answer = 3 + 7 + 17 = 27
    const priorityQueue = [] 
    
    while(job < leng || priorityQueue.length !== 0) { // 작업이 남아있거나 우선순위 큐가 비어있지 않으면
         if( job < leng && time >= jobs[job][0]) { // 작업이 남아 있고 요청되었으면(현재시간>시작시간) 
             priorityQueue.push(jobs[job++]) // 해당 작업을 큐에 넣고 job을 1 올려줌 
             priorityQueue.sort((a,b)=> a[1]-b[1]) // 소요시간 기준으로 오름차순 정렬
             continue
        }

        if(priorityQueue.length !== 0) { // 큐에 작업이 남아있으면
            time += priorityQueue[0][1] // 큐의 첫 번째 작업의 소요시간 추가 
            answer += time - priorityQueue[0][0] // 요청에서 종료까지 걸린 시간 추가(현재시간-요청시간)  
            priorityQueue.shift() // 해당 작업 제거
        } else { // 큐가 비어있으면
            time = jobs[job][0]
        }
    }
    
    return parseInt(answer/leng)
}