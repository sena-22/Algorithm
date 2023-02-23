function solution(n) {
    let arr = Array.from(String(n),Number)
    let result =arr.reduce((acc,cur)=> acc+cur,0)
    return result
}