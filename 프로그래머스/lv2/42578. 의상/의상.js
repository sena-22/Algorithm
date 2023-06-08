function solution(clothes) {
    let answer = 1
    let closet = new Map()
    
    clothes.map((el)=>{
        let item = closet.get(el[1])
        item ? closet.set(el[1],item+1) :  closet.set(el[1],1) 
    })

    for(let values of closet.values()) {  
        answer *= values +1 
    }
    return answer  - 1
} 