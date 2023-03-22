const solution = (t,p) => {
    let count = 0
    let pLeng = p.length
    for (let i=0; i <= t.length-pLeng; i++) { 
        let part = t.slice(i,i+pLeng) 
        if(part <= p) count++
    }
    return count
}