function solution(s) {
    let count = 0, removedZero = 0
 
   while(s!=='1') {
        count++
        removedZero+=s.split(0).length-1
       s = s.split(0).join('').length.toString(2)
   }

    return [count,removedZero]
}