function solution(n, m) {
    let answer = [1,1]
     const LCM = (n,m) => {
         return (n*m) /GCD(n,m)
     }
           
    const GCD = (n,m) => {
        if(n%m !== 0) return GCD(m,n%m) 
        else return m
    }
    answer[0] = GCD(n,m)
    answer[1] = LCM(n,m)
    
    return answer
}

