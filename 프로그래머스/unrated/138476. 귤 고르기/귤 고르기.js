function solution(k, tangerine) {
    
    let map = new Map()
    let count = 0
    let sum = 0
    
    // Map(5) { 1 => 1, 3 => 2, 2 => 2, 5 => 2, 4 => 1 }
    tangerine.forEach((el)=>{
        let prev = map.get(el)
        map.set(el, prev ? prev + 1 : 1)
    })
    

    // Map(5) { 3 => 2, 2 => 2, 5 => 2, 1 => 1, 4 => 1 }
    const sortedMap = new Map([...map.entries()].sort((a,b)=> b[1]-a[1]))
    
    const type = Array.from(sortedMap.values()) // [ 2, 2, 2, 1, 1 ]
    
    for (let num of type) { //2
        count++
        sum+=num // 2 + 2 + 2
        
        if(sum >=k) break
    }

    return count
}