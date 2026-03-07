import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int,input().split()))

dp = [1]*N
for i in range(1,N):
  for j in range(i):
    if A[i]>A[j]:
      dp[i] = max(dp[i],dp[j]+1)
# print(A) [10, 20, 10, 30, 20, 50]
# print(dp) [1, 2, 1, 3, 2, 4]
# i번째보다 앞을 조사 => i번째 값보다 작은 값을 dp에 입력
print(max(dp))