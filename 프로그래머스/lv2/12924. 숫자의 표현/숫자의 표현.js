function solution(n) {

    let count =1 
  
    const recursive = (pointer) => {
         if(n===pointer) return count
         let sum =0
         for (let i=pointer; i<n; i++) {
            sum+= i
           if(sum===n) {
               count++
               break
           }  else if (sum > n) {
               break
           }
        }
        recursive(pointer+1)
    }
    recursive(1)
    return count
}