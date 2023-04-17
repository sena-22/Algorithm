function solution(n, m, section) {
 let paint = 1
 let cur = section[0]

 section.map((el)=> {
     if(cur+m-1<el) { //현재 구역+롤러 길이 - 1(인덱스)이 다음 구역보다 이전이면
         cur=el//다음 칠해야할 구역으로 현재 구역 이동 
         return paint++
     }
 })
    return paint
 }
