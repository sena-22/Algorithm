function solution(word) {
    let str = ''
    const dic = []
    
    const dfs = (word, leng, dic) => { 
       const vs = [..."AEIOU"]
       
       if(leng === word.length) {
          dic.push(word)
           return
       }
       vs.forEach((v)=>{
           dfs(word+v, leng, dic )
       })
   }
    
    for(let i=1;i<=5; i++) {
        dfs(str,i,dic)
    }
    return dic.sort().indexOf(word)+1

}