function solution(brown, yellow) {
    let yellow_x = 0
    let yellow_y = 0

    for(let i=0;i<=yellow;i++) {
        if(yellow%i===0) {
            yellow_x = parseInt(yellow/i)
            yellow_y = i
            if(yellow_x *2 + yellow_y*2 + 4 === brown) {
                return [yellow_x+2,yellow_y+2].sort((a,b)=>b-a)
            }
        }
    }
    
 
}