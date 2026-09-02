class Solution:
    def missingNumber(self, nums: List[int]) -> int:
    # n개의 서로 다른 숫자를 포함하는 배열 nums가 주어집니다.
    # 숫자들은 [0, n] 범위에 속합니다.
    # 배열에 빠져 있는 유일한 숫자를 반환하세요.

        for i in range(len(nums)+1):
            if i not in nums:
                return i