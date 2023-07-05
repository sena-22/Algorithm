function solution(routes) {
    let count = 0 
    let camera = -30001
    
    routes.sort((a,b)=>a[1]-b[1])
    
    routes.forEach(([come,out]) => {
       if(camera < come) { 
           camera = out
           count++
       }
    })
   
    return count
}