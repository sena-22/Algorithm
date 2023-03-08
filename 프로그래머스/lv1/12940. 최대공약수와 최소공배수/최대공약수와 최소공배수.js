function solution(n, m) {
    let answer
     const LCM = (n,m) => {
         return (n*m) /GCD(n,m)
     }
           
    const GCD = (n,m) => {
        if(n%m !== 0) return GCD(m,n%m) 
        else return m
    }

    return answer=[GCD(n,m),LCM(n,m)]
}

