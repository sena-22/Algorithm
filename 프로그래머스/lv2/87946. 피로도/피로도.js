function solution(k, dungeons) {
    const countArr = []
 
    // 조합 구하기
    const permute = (nums) => {
        let result = []
        if(nums.length === 0) return []
        if(nums.length === 1) return [nums]
      
        for (let i=0;i<nums.length;i++) {
            const cur_num = nums[i]
            const remain_nums = nums.slice(0,i).concat(nums.slice(i+1))
            const remain_nums_permuted = permute(remain_nums)
            
            for(let j=0;j<remain_nums_permuted.length;j++) {
                const permutedArr = [cur_num].concat(remain_nums_permuted[j])
                result.push(permutedArr)
            }
        }
        return result 
    }
       const dungeonCombination = permute(dungeons)
       
       dungeonCombination.forEach((combi) => {
           let count = 0
           let rest = k
           combi.forEach((el)=> {
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