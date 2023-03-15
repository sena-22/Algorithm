function solution(sizes) {

    let w =0
    let h =0
    sizes.map((size)=>size.sort((a,b) => a-b))
    for(let i=0;i<sizes.length;i++) {
        let [sizeW,sizeH] = sizes[i]
        if (sizeW > w) w = sizeW
         if (sizeH > h) h = sizeH
    }
    return w*h
}