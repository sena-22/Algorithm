function solution(n, words) {
    let answer = [0,0]
  
    for(let i=0; i<words.length;i++) {
        let word = words[i] //현재 단어
        let person = i % n +1 // 현재 사람
        let turn = Math.ceil((i+1)/n) // 현재 순서
        
        console.log(word)
        
        if(i>0) {
            let last = words[i-1].split('').pop() // 이전 단어의 마지막 글자
            
            // 중복 단어 혹은 틀린 단어
            if(i>words.indexOf(word) || word[0]!==last) {
                answer = [person,turn]
                break
            }
        }
    }
    return answer
}