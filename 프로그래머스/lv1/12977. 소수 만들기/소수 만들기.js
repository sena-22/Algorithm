function solution(nums) {
    let cnt = 0;
    
    const isPrimeNumber = (n) => {
       for(let i=2; i<n;i++) {
           if(n%i ===0) return false //나눠서 0이 되면 소수가 아님
       }
       return true
    }

    for(let i=0;i<nums.length-2;i++) {
        for(let j=i+1;j<nums.length-1;j++) {
            for(let k=j+1;k<nums.length;k++) {
                if(isPrimeNumber(nums[i]+nums[j]+nums[k])) cnt++
            }
        }
    }

    return cnt;
}