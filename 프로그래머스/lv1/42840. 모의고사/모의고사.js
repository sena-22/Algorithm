const solution = (answer) => {
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    
    const score = [0,0,0]
    
    answer.forEach((i,idx) => {
        if(i === one[idx % 5]) score[0]++
        if(i === two[idx % 8]) score[1]++
        if(i === three[idx % 10]) score[2]++
    })

    const max = []
    
    score.forEach((el,idx)=> {
        if(el >= Math.max(...score)) {
            max.push(idx+1)
        }
    })

    return max
}