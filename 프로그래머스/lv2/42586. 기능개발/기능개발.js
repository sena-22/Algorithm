function solution(progresses, speeds) {
    const deploy = []
    let queue = []
    let count = 0
    
    progresses.forEach((p,idx)=> {
        queue.push(p)
    }) 

    while(queue.length) {  
        queue = queue.map((q, idx) => {
          return  q < 100 ? q + speeds[idx] : q
        });       

        while(queue.length && queue[0] >= 100) { 
            queue.shift() 
            speeds.shift() 
            count++ 
        }
        
        if(count > 0) {
            deploy.push(count) 
            count = 0
        }
    }
    return deploy
}


