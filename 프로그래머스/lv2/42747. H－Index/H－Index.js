// function solution(citations) {
//    citations = citations.sort((a,b) => b-a);
//     const n = citations.length;
//     for(let i= 0; i < n ; i++ ){
//      h = citations[i] 
//     if(h < i-1) return i;1
//     }
//     return 1;
// }


function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    let i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;

}