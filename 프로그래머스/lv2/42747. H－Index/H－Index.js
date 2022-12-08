
function solution(citations) {
     citations.sort((a,b) => b-a); 
    
    for(let i = 0; i < citations.length ; i++ ) { 
        if( i +1 > citations[i] ) return i; 
    }
    return citations.length;
}

// function solution(citations) {
//     citations = citations.sort((a,b) => b-a); // [6,5,3,1,0]
    
//     for(let i= 0; i < citations.length ; i++ ) {
        
//         if(i+1 >= citations[i]) return i+1; //i
        
//         /* 1. 1 >= 6 (x) //여기서 i+1은 h번 이상 인용된 논문의 개수
//          * 2. 2 >= 5 (x)
//          * 3. 3 >= 3 (o) //이 경우는 3번 이상 인용된 논문이 3개 return 3
//         */ 
//     }
// }