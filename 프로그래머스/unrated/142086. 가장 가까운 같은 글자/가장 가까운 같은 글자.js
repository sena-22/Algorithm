const solution = (s) => {
    let result =  s.split('').map((el,idx)=>{
      let before = s.slice(0,idx).split('')
      return before.indexOf(el) === -1 ? -1 : before.length-before.lastIndexOf(el)
    })
    return result
} 