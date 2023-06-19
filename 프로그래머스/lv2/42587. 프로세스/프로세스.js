function solution(priorities, location) {
    let answer = 0
    const location_arr = []
    
    for(let i=0; i<priorities.length;i++) {
        location_arr.push(i) // [0,1,2,3]
    }
   
    while(priorities.length !== 0) {
         let cur_process = priorities.shift() // 2 1 3 2
         let max_process = Math.max(...priorities)  //3 //2      

        if(max_process>cur_process) { 
            priorities.push(cur_process) // [1,3,2,2]  [3,2,2,1] // [2,2,1]
            location_arr.push(location_arr.shift()) // [1,2,3,0] [2,3,0,1]
        } else {
            answer++ //1 2
            if(location_arr.shift()===location) return answer // 2 === 2 
        }
    }
}