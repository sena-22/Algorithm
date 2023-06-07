function solution(user_id, banned_id) {

    const answer  = new Set()
    
    const checked = Array(user_id.length).fill(false)
    const reg = banned_id.map(id=>new RegExp(`^${id.replaceAll('*','.')}$`))
    
    const dfs = (idx=0,arr=[]) => { 
        
        if(idx===banned_id.length) {
            answer.add(arr.sort().join(','))
        } else {
            for(let i=0;i<user_id.length;i++){
                if(checked[i]) {
                    continue
                }
                
                if(user_id[i].match(reg[idx])) {
                    checked[i] = true
                    dfs(idx+1,[...arr,user_id[i]])
                    checked[i] = false
                } 
            }
        }   
    }
  dfs()
  return answer.size
}
