function solution(operations) {
    
    let priorityQueue = []

    operations.forEach((operation)=>{
        let [command,num] = operation.split(' ')
        num = +num
        
        switch(command){
            case 'I':
                priorityQueue.push(num)
                priorityQueue.sort((a,b)=>a-b)
                break;
            case 'D':
                if(num === 1) {
                    priorityQueue.pop()
                    break;
                } else if(num === -1) {
                    priorityQueue.shift()
                    break;
                }
        }
    })
    
    let leng = priorityQueue.length

        if(leng === 0) return [0,0]
        else {
            return [priorityQueue[leng-1] , priorityQueue[0]]
        }
}