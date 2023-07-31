function solution(k, score) {
    let HOF = []
    let lowest = []
    
    score.forEach((s)=>{
        
        if(HOF.length < k) {
            HOF.push(s)
        } else {
            const min = HOF[HOF.length-1]
            if(min<s) {
                HOF.pop()
                HOF.push(s)
            }
        }

        HOF.sort((a,b)=>b-a)    
        lowest.push(HOF[HOF.length-1])
    })
        return lowest
}