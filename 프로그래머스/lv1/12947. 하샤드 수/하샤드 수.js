function solution(x) {
    let arrX = Array.from(String(x)).map(Number)
    let digitSum = arrX.reduce((acc,cur)=>acc + cur)
    return x % digitSum === 0 ? true : false 
}