function solution(number) {
    let answer = 0;
    for(let n=0; n< number.length-2; n++) {
        for(let i=1 ; i<number.length-1 ; i++) {
            for(let j=i+1; j <number.length;j++) {
           if( number[n] + number[n+i] + number[n+j] === 0) {
              answer += 1;
           } 
        }
        }
    }return answer;
    } 