function solution(wallpaper) {
    let X = []
    let Y = []
    
    wallpaper.forEach((wall,col)=>{
     [...wall].forEach((w,row)=>{
            if(w ==='#') {
                Y.push(col);
                X.push(row)
            }
     })
        
    })
    X.sort((a,b)=>a-b)
    Y.sort((a,b)=>a-b)
    
    return [Y[0],X[0],Y[Y.length-1]+1,X[X.length-1]+1]
}