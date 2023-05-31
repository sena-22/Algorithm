function solution(s) {

    let count = 0
    let stack = []
     let str = s.split('');

    const check= (s) => {
        if(s[0]=== '}' ||s[0]=== ']'||s[0]=== ')') return false
     
        let stack = []
        
        for(_s of s) {
            if(['(','[','{'].includes(_s)) {
                stack.push(_s)
            }
             else if(stack.length){
                  let braket = stack.pop()

                if(_s === ')' && braket !== '(')  {
                    return false
                } else if(_s === ']' && braket !== '[') {
                    return false
                } else  if(_s === '}' && braket !== '{')  {
                    return false
                }
            }
        }
        if(stack.length) return false
        return true
    }
    
    for(let i=0;i<s.length;i++) {      
    
      if(check(str)) {
          count++
      }
          str.push(str.shift());
    } 
    return count
}