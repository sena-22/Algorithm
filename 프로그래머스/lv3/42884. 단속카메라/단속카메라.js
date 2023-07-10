function solution(routes) {
    let count = 0 
    let camera = -30001
    
    routes.sort((a,b)=>a[1]-b[1]) // 진출 시점 기준으로 오름차순
    // console.log(routes) // [ [ -20, -15 ], [ -18, -13 ], [ -14, -5 ], [ -5, -3 ] ]
    
    routes.forEach(([come,out]) => {
          //-30001 < -20(true) => -15 < -18(false) => -15 < -14(true)  => -5 < -5 (false)
       if(camera < come) { // 카메라가 진입 시점보다 뒤에 있으면  
           camera = out // 진출 시점으로 옮겨준다  -15 => -5
           count++ 
       }
        
        // -30001 
    })
   
    return count
}