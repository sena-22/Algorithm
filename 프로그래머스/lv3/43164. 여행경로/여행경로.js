function solution(tickets) { 
    const used = []
    const stack = []
    
   tickets.sort()
    
    // console.log(tickets) //[ [ 'HND', 'IAD' ], [ 'ICN', 'JFK' ], [ 'JFK', 'HND' ] ]

    const dfs = (airport, count) => {
        stack.push(airport)
        
        if(count === tickets.length) {
            return true
        }
           
        for(let i=0;i<tickets.length;i++) {
            if(!used[i] && tickets[i][0] === airport) { // 현재 그 공항이면
                used[i] = true
                if(dfs(tickets[i][1], count+1)) return true
                used[i] = false 
        }        
    } 
    stack.pop()
    return false
}
    dfs("ICN",0)
    return stack
}  
    