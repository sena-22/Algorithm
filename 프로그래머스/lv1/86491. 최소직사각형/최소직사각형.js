function solution(sizes) {
   let answer = 0;
    let w =0
    let h =0
   sizes.map((size)=>size.sort((a,b) => a-b))
    for(let i=0;i<sizes.length;i++) {
        let sizeW = sizes[i][0] 
        let sizeH = sizes[i][1]
        if (sizeW > w) w = sizeW
         if (sizeH > h) h = sizeH
    }
    return w*h
}