function solution(brown, yellow) {
    const CORNER = 4
    const getBrown = (x,y) => (x+y)*2 + CORNER

    for(let i=0;i<=yellow;i++) {
        let yx = 0, yy = 0
        
        if(yellow % i === 0) { // 1
            yx = yellow/i // 2/1 = 2
            yy = i // 1
            
            let expectedBrown = getBrown(yx,yy)
            
            if(expectedBrown === brown) {
                return [yx+2,yy+2].sort((a,b)=>b-a)
            }
        }
    }
}