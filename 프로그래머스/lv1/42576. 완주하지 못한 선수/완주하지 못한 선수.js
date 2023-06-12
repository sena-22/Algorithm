function solution(participant, completion) {
    
    let sortedP = participant.sort((a, b) => a > b ? 1 : -1);
    let sortedC =  completion.sort((a, b) => a > b ? 1 : -1);

    for (let i=0; i< sortedP.length; i++) {
          if(sortedP[i]!==sortedC[i]) return sortedP[i]
    }
    return sortedP[sortedP.length-1]
}