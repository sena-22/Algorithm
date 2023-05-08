function solution(A,B){
    var answer = 0;
    A = A.sort((a,b)=>a-b)
    B = B.sort((a,b)=>b-a)
   
    answer = A.reduce((acc,cur,idx)=>{
        return acc+= cur*B[idx]
    },0)

    return answer;
}