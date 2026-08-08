# Fisher-Yates Shuffle

import random

class Solution:

    def __init__(self, nums: List[int]):
        self.original = nums[:] # 원본
        
    # 배열을 처음 상태로 되돌리고 반환 => 원본의 복사본 반환
    def reset(self) -> List[int]:
        return self.original[:]
        
    # 원소를 무작위로 섞어서 섞인 배열 반환
    def shuffle(self) -> List[int]:
        # 임시 배열
        nums = self.original[:]

        # random.randint(a, b) : a 이상 b 이하의 정수 뽑기
        for i in range(len(nums)-1,0,-1):
            # i와 0~i 중 하나 랜덤하게 교환
            j = random.randint(0,i)
            nums[i],nums[j] = nums[j],nums[i]
        return nums
        

