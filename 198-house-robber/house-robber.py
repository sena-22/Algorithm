class Solution:
    def rob(self, nums: List[int]) -> int:
    # 당신은 길가에 있는 집들을 털려고 계획하는 전문 도둑입니다.
    # 각 집에는 일정한 금액의 돈이 숨겨져 있습니다.
    # 하지만 인접한 두 집은 보안 시스템이 연결되어 있어, 같은 밤에 서로 이웃한 두 집을 모두 털면 경찰에 자동으로 신고됩니다.
    # 정수 배열 nums가 주어집니다. nums[i]는 i번째 집에 있는 돈의 양을 나타냅니다.
    # 경찰에 신고되지 않도록 하면서 오늘 밤 훔칠 수 있는 돈의 최대 금액을 반환하세요.

    # dp[i] = i번째 집까지 훔칠 수 있는 최대 금액
    # dp[i] = max(dp[i-1], dp[i-2]+nums[i])
    # 이전 집을 터는 경우 vs 그 앞집 + 현재 집을 터는 경우 
    
        if len(nums) == 1:
            return nums[0]

        dp = [0] * len(nums)

        dp[0] = nums[0]
        dp[1] = max(nums[0],nums[1])

        for i in range(2,len(nums)):
            dp[i] = max(dp[i-1], dp[i-2]+nums[i])

        return dp[-1]

