function solution(k, dungeons) {
    const countArr = []
 
    const permute = (dungeon) => {
        let result = []
        if(dungeon.length === 0) return []
        if(dungeon.length === 1) return [dungeon]
      
        for (let i=0;i<dungeon.length;i++) {
            const cur = dungeon[i]
            const remain = dungeon.slice(0,i).concat(dungeon.slice(i+1))
            const remain_permuted = permute(remain)
            
            for(let j=0;j<remain_permuted.length;j++) {
                const permutedArr = [cur].concat(remain_permuted[j])
                result.push(permutedArr)
            }
        }
        return result 
    }
       const dungeonPermutation = permute(dungeons)
       
       dungeonPermutation.forEach((permutation) => {
           let count = 0
           let rest = k
           permutation.forEach((el)=> {
                let [necessary, use] = el
                if(necessary > rest) return 
                rest -= use
                if(rest<0) return
                count++
           })
           countArr.push(count)
       })
    return Math.max(...countArr);
}