function solution(food) {
    let answer = ''
    food.map((el,idx)=> {
      if(idx===0) return
      answer+= String(idx).repeat(parseInt(el/2))
    })
    
    answer+=0
    
    for(let i=food.length-1; i>0; i--) {
         answer+= String(i).repeat(parseInt(food[i]/2))
    }
    
    return answer
}