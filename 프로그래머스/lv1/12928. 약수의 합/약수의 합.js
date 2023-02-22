function solution(n) {
    let result= 0
    let i = 0

   while (i < n) {
       if (n % i === 0)  result += i
       else result
        i++  
       console.log(result)
   }
    return result + n
}