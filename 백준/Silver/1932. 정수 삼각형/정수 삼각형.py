import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
dp = [row[:] for row in arr] #원본 배열복사 => 누적값 저장

for i in range(1,n):
  for j in range(i+1):
    # 왼쪽, 오른쪽은 선택지가 하나
    if j == 0: #왼쪽 끝
      dp[i][j] += dp[i-1][j]
    elif j == i: #오른쪽 끝
      dp[i][j] += dp[i-1][j-1]

    # 가운데는 선택지 2개 
    else:
        dp[i][j] += max(dp[i-1][j-1], dp[i-1][j])

print(max(dp[n-1]))
     
