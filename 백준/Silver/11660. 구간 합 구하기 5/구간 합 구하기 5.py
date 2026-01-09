import sys
try:
    sys.stdin = open("input.txt", "r")
except:
    pass
input = sys.stdin.readline

n,m = map(int,input().split())

# 원본리스트(N줄)
A = [[0]*(n+1)]
# 합배열
D = [[0]*(n+1) for _ in range(n+1)]

# 원본 리스트 저장
for i in range(n):
    A_row = [0] +[int(x) for x in input().split()]
    A.append(A_row)

# 합배열 저장
for i in range(1,n+1): # 0번 인덱스는 비어있음
    for j in range(1,n+1):
        D[i][j] = D[i][j-1] + D[i-1][j] - D[i-1][j-1] + A[i][j]

# 구간합 질의(M개)
for i in range(m):
    x1,y1,x2,y2 = map(int,input().split())
    prefix_sum = D[x2][y2] - D[x1-1][y2] - D[x2][y1-1] + D[x1-1][y1-1]
    print(prefix_sum)
    