function solution(name, yearning, photo) {
  return  photo.map((v)=> {
       let score = 0
       v.map((photo)=>  {
           let idx = name.indexOf(photo)
           if(idx !== -1) {
               score+= yearning[idx]
           } 
       })
       return score
   })
    
}