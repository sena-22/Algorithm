function solution(tickets) { 
    let route = []
    const visited = []
    const stack = []

   tickets.sort()

    const dfs = (airport, count) => {
        stack.push(airport)
        
        if(count === tickets.length) {
            route = stack
            return true
        }
           
        for(let i=0;i<tickets.length;i++) {
            if(!visited[i] && tickets[i][0] === airport) {
                visited[i] = true
                if(dfs(tickets[i][1], count+1)) return true
                visited[i] = false 
        }        
    }
    
    stack.pop()
    return false
 
}
 
    dfs("ICN",0)
    return route
}  
    