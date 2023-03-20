const solution = (strings,n) => {
    let list = strings.map((el,idx)=>({idx:idx,val:el}))
    list.sort((a,b)=>{
        if(a.val[n] === b.val[n]) return a.val > b.val ? 1 :-1
      return a.val[n]>b.val[n] ? 1 : -1
    })   
    return list.map(el=> el.val)
}