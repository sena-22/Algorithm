function solution(s, n) {
    let charCode = [...s].map((el)=>{
    let cur = el.charCodeAt(el)
    if(cur === 32 ) return cur
    if((cur >= 97 && cur+n > 122) ||(cur < 97 && cur+n > 90)) return  cur-26+n
    else return cur + n
})
      return charCode.map((el)=>String.fromCharCode(el)).join('')}