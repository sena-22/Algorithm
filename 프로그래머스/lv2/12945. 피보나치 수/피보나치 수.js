function solution(n) {

    const fib = (n) => {
        let result = 0
        
        if(n<=2) return n
        
        let first = 1
        let second = 1
        
        for(let i=3;i<=n; i++) {
            result = first+second
            first = second % 1234567
            second = result % 1234567
        }
       return result % 1234567 
    }
    return fib(n) 
}