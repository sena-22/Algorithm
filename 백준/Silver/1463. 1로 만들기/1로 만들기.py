import sys
input = sys.stdin.readline

X = int(input())
dp = [0]*(X+1)
dp[1] = 0 #1은 연산x

for i in range(2,X+1):
  dp[i] = dp[i-1]+1 # 1을 빼는 연산
  if i%2 == 0: #2로 나누어 떨어질 때 연산 횟수가 작으면 변경 
    dp[i] = min(dp[i],dp[i//2]+1)
  if i%3 == 0: #3으로 나누어 떨어질 때 연산 횟수가 작으면 변경 
    dp[i] = min(dp[i],dp[i//3]+1)

# print(dp)
print(dp[X])

# dp[10] 
# [0, 0, 1, 1, 2, 3, 2, 3, 3, 2, 3]
# dp[9]에서 1을 더하는 연산 : dp[9]는 2이므로 => 3
# dp[5]에서 2를 곱한 연산 : dp[5]는 3이므로 => 4 
# 둘 중 작은 값 저장(3)