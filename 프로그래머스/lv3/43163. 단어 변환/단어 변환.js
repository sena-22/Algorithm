function solution(begin, target, words) {
    // words에 타겟이 없으면 0 반환
    if(!words.includes(target)) return 0
    
    // 현재 문자와 한글자만 다르면 연결된 것
    const isConnected = (str1,str2)=> {
        let count = 0
        
        for(let i=0; i<str1.length;i++) {
             str1[i] !== str2[i] && count++ 
        }

        return count === 1 ? true : false
    }
    
    const visited = {[begin]:0} // {dot:2, lot:2}
    const q = [begin]
    
   while(q.length) {
       const cur = q.shift() // dot
       
       if(cur === target) break 
       
       for(const word of words) { // hot
           if(!visited[word] && isConnected(word,cur)) {
               visited[word] = visited[cur] +1 // 1 
               q.push(word)  // dot,
           }
       }
   }
    console.log(visited)
    return visited[target] 
}