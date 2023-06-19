function solution(priorities, location) {
    let answer = 0
    const location_arr = []
    
    for(let i=0; i<priorities.length;i++) {
        location_arr.push(i)
    }
   
    while(priorities.length !== 0) {
         let cur_process = priorities.shift() 
         let max_process = Math.max(...priorities)          

        if(max_process>cur_process) { 
            priorities.push(cur_process)
            location_arr.push(location_arr.shift())
        } else {
            answer++
            if(location_arr.shift()===location) return answer
        }
    }
}