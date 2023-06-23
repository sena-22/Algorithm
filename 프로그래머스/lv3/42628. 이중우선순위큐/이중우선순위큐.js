function solution(operations) {
    class PriorityQueue {
        constructor(queue) {
            this.queue = [] 
        }
        
        add(num) {
            this.queue.push(num)
            this.queue.sort((a,b)=>a-b)
        }
        
        del_min() {
            this.queue.shift()
        }
        
        del_max() {
            this.queue.pop()
        }
        
        getMaxMin()  {
            return [this.queue[this.queue.length-1],this.queue[0],]
        }
        
    }
    
    let priorityQueue = new PriorityQueue([])

    operations.forEach((operation)=>{
        let [command,num] = operation.split(' ')
        num = +num
        
        switch(command){
            case 'I':
                priorityQueue.add(num)
                break;
            case 'D':
                if(num === 1) {
                    priorityQueue.del_max()
                } else if(num === -1) {
                    priorityQueue.del_min()
                }
        }
    })
    
        if(priorityQueue.queue.length === 0) return [0,0]
        else {
            return priorityQueue.getMaxMin()
        }
}