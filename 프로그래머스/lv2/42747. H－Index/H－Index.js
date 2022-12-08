//9번 케이스 통과 X
function solution(citations) {
    citations = citations.sort((a,b) => b-a); 
    
    for(let i = 0; i < citations.length ; i++ ) { 
        if( i +1 >= citations[i] ) return i; 
    }
    return citations.length
}


// function solution(citations) {
//     citations = citations.sort((a, b) => b - a);
//     let i = 0;
//     while (i + 1 <= citations[i]) { //인용된 숫자가 i번째 숫자와 같아질 때까지 i++
//         i++;
//     }
//     return i;

// }