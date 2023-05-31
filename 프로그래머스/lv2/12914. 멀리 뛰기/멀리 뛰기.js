function solution(n) {
    let count = 0
    
    let fibo = new Array(n+1).fill(1)
    for(let i=2;i<fibo.length;i++) {
        fibo[i]=(fibo[i-1]+fibo[i-2]) % 1234567
    } 
      return fibo[n] % 1234567
}
