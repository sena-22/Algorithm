class Solution:
    def increasingTriplet(self, nums: list[int]) -> bool:
        # 정수 배열 nums가 주어졌을 때, 다음 조건을 만족하는 세 인덱스 (i, j, k)가 존재하면 true를 반환하라.
        # i < j < k
        # nums[i] < nums[j] < nums[k]
        # 그러한 인덱스가 존재하지 않으면 false를 반환하라.

        # 지금까지 발견한 가장 작은 숫자
        first = float('inf')
        # fist보다 큰 숫자 중 가능한 한 작은 숫자
        second = float('inf')

        for num in nums:
            if num <= first:
                first = num 
            elif num <= second: 
                second = num
            else:
                return True
        return False
