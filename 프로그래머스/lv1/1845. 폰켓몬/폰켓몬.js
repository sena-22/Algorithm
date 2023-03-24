const solution = (nums) => {
    const pokeTable = new Map()
    for (let i =0; i<nums.length;i++) {
        pokeTable.set(nums[i],1)
    }
   return pokeTable.size > nums.length/2 ?  nums.length/2 : pokeTable.size
}