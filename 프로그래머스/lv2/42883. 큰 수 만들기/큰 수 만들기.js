function solution(number, k) { // "1924"
    const stack = []  // 

    for (num of number) { // '1', '9', '2', '4'
        while(k > 0 && !!stack.length && stack[stack.length-1] < num) {  
                stack.pop() 
                k-- // 1
        }
        stack.push(num) 
    }

    return stack.slice(0,number.length-k).join('') //  ['9','4']
    
}