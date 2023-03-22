 const solution = (numbers) => {
    let result = []
    for(let i =0; i<numbers.length-1; i++) {
        for(let j =i+1; j<numbers.length; j++) {
            let sum = numbers[i]+numbers[j]
            result.includes(sum) ? null : result.push(sum)
        }   
    }
     return result.sort((a,b)=>a-b) 
 } 
