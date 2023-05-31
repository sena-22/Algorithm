function solution(k, tangerine) {
    
    let map = new Map()
    let count = 0
    let sum = 0
    
    tangerine.forEach((el)=>{
        let prev = map.get(el)
        map.set(el, prev ? map.get(el)+1 : 1)
    })
    
    const sortedMap = new Map([...map.entries()].sort((a,b)=> b[1]-a[1]))
    const type = Array.from(sortedMap.values())
    
    console.log(type)
    
    for (let num of type) {
        count++
        sum+=num
        
        if(sum >=k) break
    }

    return count
}