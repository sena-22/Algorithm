function solution(brown, yellow) {
    const CORNER = 4
    const getBrown = (x,y) => (x+y)*2 + CORNER

    for(let i=0;i<=yellow;i++) {
        let yellow_x = 0
        let yellow_y = 0
        
        if(yellow % i=== 0) {
            yellow_x = parseInt(yellow/i)
            yellow_y = i
            
            let  expectedBrown = getBrown( yellow_x,yellow_y)
            
            if(expectedBrown === brown) {
                return [yellow_x+2,yellow_y+2].sort((a,b)=>b-a)
            }
        }
    }
}