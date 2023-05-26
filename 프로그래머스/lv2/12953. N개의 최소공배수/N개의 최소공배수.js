function solution(arr) {
    arr.sort((a,b)=>b-a)
    const gcd = (a,b)=> {
        let m
        while(b!==0) {
            m = a%b
            a=b
            b=m
        }
        return a
    }
    const lcm = (a,b) => {
        return (a*b)/gcd(a,b)
    }
    return arr.reduce((acc,cur)=> {
        return lcm(acc,cur)
    })
}