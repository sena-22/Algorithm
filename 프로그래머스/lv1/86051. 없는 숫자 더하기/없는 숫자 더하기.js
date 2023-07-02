function solution(numbers) {
    let numArr = []
    for(let i=0;i<10;i++) {
        numArr.push(i)
    }
    return  numArr.filter((el)=>!numbers.includes(el)).reduce((acc,cur)=>acc+cur,0)
}