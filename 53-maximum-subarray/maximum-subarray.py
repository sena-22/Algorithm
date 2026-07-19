class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # 정수 배열 nums가 주어졌을 때, 합이 가장 큰 연속된 부분 배열(subarray)을 찾아 그 부분 배열의 합을 반환하라.

        if len(nums) == 1:
            return nums[0]

        max_sum = nums[0]
        cur_sum = nums[0]

        # 이전 배열에 이어 붙이는 경우 vs 현재부터 시작하는 경우
        # 현재 최대합 = max(현재 숫자, 이전 최대한+현재숫자)

        for i in range(1, len(nums)):
            cur_sum = max(nums[i],cur_sum+nums[i])
            max_sum = max(max_sum,cur_sum)

        return max_sum 