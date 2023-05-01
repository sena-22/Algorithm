function solution(ingredient) {
    const stack=[]
    let count = 0
    
    ingredient.forEach((i)=>{
        stack.push(i)
        if(stack.length >= 4 && i === 1) {
           let isBugger = stack.slice(stack.length-4,stack.length).join('')
            if(isBugger === '1231') {
                count++
                stack.splice(stack.length-4,stack.length)
            }
        }
    })
    return count
}
