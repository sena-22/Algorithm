function solution(n) {
   if (n === 1) return 0
   return n <= 2 ? n : n % 2 === 0 ? n += solution(n-1) : solution(n-1)
}

