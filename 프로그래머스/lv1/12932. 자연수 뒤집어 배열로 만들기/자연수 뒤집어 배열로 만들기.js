function solution(n) {
 const arr = [];
 n = String(n).split('').map((el)=>arr.unshift(Number(el)))
 return arr
}