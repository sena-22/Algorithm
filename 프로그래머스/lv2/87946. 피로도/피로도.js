function solution(k, dungeons) {
    const countArr = []
 
    const permute = (dungeon) => {
        let result = []
        if(dungeon.length === 0) return []
        if(dungeon.length === 1) return [dungeon]
      
        for (let i=0;i<dungeon.length;i++) {
            const cur = dungeon[i] //[80,20]  // [30,10]
            const remain = dungeon.slice(0,i).concat(dungeon.slice(i+1))
            const remain_permuted = permute(remain) // [[50,40]] 
            
            for(let j=0;j<remain_permuted.length;j++) { // [30,10], [50,40],
                const permutedArr = [cur].concat(remain_permuted[j]) // [50,40], [30,10]
                result.push(permutedArr) 
            }
        }
        return result 
    }
       const dungeonPermutation = permute(dungeons)
       
       dungeonPermutation.forEach((permutation) => {
           let count = 0
           let rest = k
           permutation.forEach(([necessary, use])=> {
                if(necessary > rest || rest - use < 0  ) return 
                rest -= use
                count++
           })
           countArr.push(count)
       })
    
    return Math.max(...countArr);
}