# 정수 배열 nums가 주어졌을 때, 다음 조건을 만족하는 세 수의 조합(triplet)을 모두 반환하라.

# 서로 다른 인덱스의 세 숫자 선택 => 다 더했을 때 0
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:

        # 오름차순 정렬
        nums = sorted(nums)
        answer = []

        # 1개 고정, 나머지 2개를 투포인터로 찾기
        for i in range(len(nums)):

            # 같은 숫자를 고정하는 경우 건너뛰기
            if i > 0 and nums[i] == nums[i-1]:
                continue

            left = i+1 # 고정값 다음
            right = len(nums)-1

            while left < right :
                three_sum = nums[i] + nums[left] + nums[right]
                if three_sum == 0 :
                    answer.append([nums[i],nums[left],nums[right]])
                    
                    left += 1
                    right -= 1 

                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif three_sum < 0 :
                    left += 1
                else: 
                    right -= 1

        return answer 