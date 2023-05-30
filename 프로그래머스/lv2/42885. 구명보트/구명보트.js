function solution(people, limit) {
    people.sort((a,b)=>b-a)
    
    let cnt = 0
    
    for(let i=0, j=people.length-1; i<=j; i++) {
        if(people[i]+people[j]<=limit) { //limit보다 작거나 같으면
            j-- //무거운 사람도 빠짐
        }   //아니면 가벼운 사람만 빠짐
      cnt++ 
    }
    return cnt
}