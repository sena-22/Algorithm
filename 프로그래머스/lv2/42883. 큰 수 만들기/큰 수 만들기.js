function solution(number, k) {
    const stack = []  // ['4','3']

    for (num of number) { // '4', '3'
        while(k > 0 && !!stack.length && stack[stack.length-1] < num) {  
                stack.pop() 
                k--
        }
        stack.push(num) 
    }

    return stack.slice(0,number.length-k).join('')
    
}