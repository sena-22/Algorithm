function solution(word) {
    let str = ''
    const dic = [] // 'A', 'E'....'AA', 
   
    
    const dfs = (word, leng, dic) => { // '', 1, [] // 'A',1,[]
       const vs = [..."AEIOU"] 
       
       if(leng === word.length) { // 1, 0  // 1,1
          dic.push(word) // 'A' // 'E'
           return // return 13 line
       }
       vs.forEach((v)=>{ //'A' // 'E'
           dfs(word+v, leng, dic ) // ''+'A', 1, [] // 'E', 1, []
       })
   }
    
    for(let i=1;i<=5; i++) { // 'AA'
        dfs(str,i,dic)  //'', 1, []
    }
    
    
    return dic.sort().indexOf(word)+1

}