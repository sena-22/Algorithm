function solution(numbers) {

    const answer = [] // 0,1,17,7,71
    const arr = new Array(numbers.length).fill(0)

    const isPrimeNumber = (x) => {
        if(x === 0 || x === 1) return false
        for(let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
            if(x % i === 0) return false
        }
        return true
    }
    
    const dfs = (cur) => { // ''
        answer.push(+cur)         
        for(let i=0;i<numbers.length;i++) { 
            if(arr[i] === 0) { 
                arr[i] = 1 
                dfs(cur + numbers[i]) 
                arr[i] = 0
            }
        }
    }
    
    dfs('')
    answer.shift() // 0 제거
    return [...new Set(answer)].filter(v=>isPrimeNumber(v)).length
}