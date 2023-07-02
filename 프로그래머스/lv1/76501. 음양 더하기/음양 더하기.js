function solution(absolutes, signs) {
   let map = absolutes.map((absolute,idx)=>signs[idx] === false ? absolute * -1 : absolute )
   return map.reduce((acc,cur)=> acc += cur,0)
}