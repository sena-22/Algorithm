import sys
input = sys.stdin.readline

N = int(input())
costs = [list(map(int, input().split())) for _ in range(N)]
# [[26, 40, 83], [49, 60, 57], [13, 89, 99]]

dp = [[0]*3 for _ in range(N)]

# dp[i][0] => i번째 집을 R로 칠했을 때 최소비용
# dp[i][1] => i번째 집을 G로 칠했을 때 최소비용
# dp[i][2] => i번째 집을 B로 칠했을 때 최소비용

# 첫번째 집
dp[0] = costs[0]

for i in range(1,N):
  # dp[1][0] (R) = 49 + min(40, 83) = 89 
  # 첫 번째 집을 R로 칠하는 경우 최소비용 = 49 + 최소값(앞집 G,B 칠하는 비용)
  dp[i][0] = costs[i][0] + min(dp[i-1][1],dp[i-1][2])
  dp[i][1] = costs[i][1] + min(dp[i-1][0],dp[i-1][2])
  dp[i][2] = costs[i][2] + min(dp[i-1][0],dp[i-1][1])

print(min(dp[N-1]))


